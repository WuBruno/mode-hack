// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract Vault is Ownable {
    address constant FEE_SHARING_CONTRACT =
        0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6;

    using ECDSA for bytes32;
    using Address for address;

    event Transfer(address indexed token, address indexed to, uint256 amount);

    VaultFactory public factory;
    address public temporaryKey;

    function updateKey(address _key) external onlyOwner {
        _updateKey(_key);
    }

    function _updateKey(address _key) private {
        temporaryKey = _key;
    }

    constructor(address _key, address owner, uint feeSharingId) {
        temporaryKey = _key;
        _transferOwnership(owner);
        factory = VaultFactory(msg.sender);
        assignFeeSharing(feeSharingId);
    }

    function assignFeeSharing(uint feeSharingId) internal {
        address(FEE_SHARING_CONTRACT).functionCall(
            abi.encodeWithSignature("assign(uint256)", feeSharingId)
        );
    }

    function transfer(
        address addr,
        uint256 amount,
        bytes memory signature
    ) external payable {
        require(factory.isTerminal(msg.sender), "unauthorized");
        bytes32 signedMessageHash = keccak256(abi.encodePacked(addr, amount))
            .toEthSignedMessageHash();

        require(
            signedMessageHash.recover(signature) == temporaryKey,
            "invalid signature"
        );
        _updateKey(address(0));

        IERC20(addr).transfer(msg.sender, amount);
        emit Transfer(addr, msg.sender, amount);
    }

    function call(
        address addr,
        bytes memory data,
        bytes memory signature,
        address tokenAddress,
        uint256 amount
    ) external payable {
        require(factory.isTerminal(msg.sender), "unauthorized");

        bytes32 signedMessageHash = keccak256(
            abi.encodePacked(addr, msg.value, data)
        ).toEthSignedMessageHash();

        require(
            signedMessageHash.recover(signature) == temporaryKey,
            "invalid signature"
        );
        _updateKey(address(0));

        // You can send ether and specify a custom gas amount
        addr.functionCallWithValue(data, msg.value);
        emit Transfer(tokenAddress, msg.sender, amount);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function withdrawToken(address _token) external onlyOwner {
        IERC20 token = IERC20(_token);
        token.transfer(owner(), token.balanceOf(address(this)));
    }
}

contract VaultFactory is Ownable {
    // Add the library methods
    using EnumerableSet for EnumerableSet.AddressSet;
    using Address for address;
    uint public feeSharingId;

    constructor() {
        registerFeeSharing(msg.sender);
    }

    // Declare a set state variable
    EnumerableSet.AddressSet private terminals;

    address constant FEE_SHARING_CONTRACT =
        0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6;

    // vault owners. One per owner
    mapping(address => address) public vaults;

    function deploy(address key) public {
        require(vaults[msg.sender] == address(0), "vault already exists");
        Vault vault = new Vault(key, msg.sender, feeSharingId);
        vaults[msg.sender] = address(vault);
    }

    function addTerminal(address terminal) public onlyOwner {
        terminals.add(terminal);
    }

    function remove(address terminal) public onlyOwner {
        terminals.remove(terminal);
    }

    function isTerminal(address terminal) public view returns (bool) {
        return terminals.contains(terminal);
    }

    function getTerminals() external view returns (address[] memory) {
        return terminals.values();
    }

    function registerFeeSharing(address feeSharingRecipient) internal {
        bytes memory response = address(FEE_SHARING_CONTRACT).functionCall(
            abi.encodeWithSignature("register(address)", feeSharingRecipient)
        );
        feeSharingId = abi.decode(response, (uint));
    }
}
