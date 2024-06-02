// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {Chainlink, ChainlinkClient} from "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";

contract ModelResultConsumer is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256 public modelResult;
    bytes32 private jobId;
    uint256 private fee;

    event RequestModelResult(bytes32 indexed requestId, uint256 modelResult);

    constructor() ConfirmedOwner(msg.sender) {
        _setChainlinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);
        _setChainlinkOracle(0x207F2598317eC26C9E8c12E0793b915ed14AE3B4);
        jobId = "3c98bf2c2d9e46158be9e40074701ea0";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    function requestModelResult() public returns (bytes32 requestId) {
        Chainlink.Request memory req = _buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );
        req._add(
            "get",
            "http://47.236.156.45:6700/v1/model/predict/20"
        );
        req._add("path", "result,inferenceResult");
        int256 timesAmount = 10 ** 18;
        req._addInt("times", timesAmount);
        return _sendChainlinkRequest(req, fee);
    }

    function fulfill(
        bytes32 _requestId,
        uint256 _modelResult
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestModelResult(_requestId, _modelResult);
        modelResult = _modelResult;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}