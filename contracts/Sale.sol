pragma solidity ^0.8.0;

import "./RefundableCrowdsale.sol";

contract Sale is RefundableCrowdsale {

    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token
    )
        Crowdsale(rate, wallet, token) public {}

    function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override {
        super._preValidatePurchase(beneficiary, weiAmount);
    }
}
