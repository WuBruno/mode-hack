// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    constructor() ERC20("TestToken", "T") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
