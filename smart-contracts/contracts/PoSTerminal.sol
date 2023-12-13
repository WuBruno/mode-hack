// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./Vault.sol";

contract PoSTerminal is Ownable {
    using Address for address;

    address constant FEE_SHARING_CONTRACT =
        0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6;

    function assignFeeSharing(uint feeSharingId) internal {
        address(FEE_SHARING_CONTRACT).functionCall(
            abi.encodeWithSignature("assign(uint256)", feeSharingId)
        );
    }

    constructor(uint feeSharingId) {
        assignFeeSharing(feeSharingId);
    }

    function transferAndCall(
        address vaultAddress,
        address tokenAddress,
        uint256 amount,
        bytes memory signature,
        address target,
        bytes memory data
    ) public payable onlyOwner {
        Vault(vaultAddress).transfer(tokenAddress, amount, signature);

        target.functionCallWithValue(data, msg.value);
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function withdrawToken(address _token) public onlyOwner {
        IERC20 token = IERC20(_token);
        token.transfer(owner(), token.balanceOf(address(this)));
    }

    function call(address addr, bytes memory data) public payable onlyOwner {
        addr.functionCallWithValue(data, msg.value);
    }
}
