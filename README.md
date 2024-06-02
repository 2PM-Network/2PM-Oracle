# 2PM-Oracle

This project utilizes Chainlink's external adapters and Any API technology to build a local Chainlink node for oracle services.

## Project Overview

The 2PM-Oracle project follows these main steps:

1. The consumer constructs a request through a function.
2. The client serializes the request and calls the `TransferAndCall` function of the ERC-677 token.
3. The LINK token calls the Operator contract to issue an API request.
4. The Operator writes the request to the EventLog.
5. The off-chain oracle node retrieves the request and writes the data back to the consumer.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) package manager
- [Docker](https://www.docker.com/) for running the Chainlink node

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/2PM-Network/2PM-Oracle.git
   cd 2PM-Oracle
   ```

2. Install the dependencies:

   ```bash
   yarn
   ```

## Running Tests

To run the tests for the 2PM-Oracle project, use the following command:

```bash
yarn test
```

## Starting the Chainlink Node

To start the Chainlink node using Docker, run the following command:

```bash
docker-compose up
```

This command will start the Chainlink node and its associated services defined in the `docker-compose.yml` file.

## Deployment Steps
To deploy and test the Operator and Consumer contracts using Remix, create or import the contract files in Remix, compile them using the appropriate compiler version, and then deploy the contracts on the Sepolia testnet. To ensure a smooth process, fund the deployed contracts with LINK tokens and Sepolia ETH. Make sure you have the necessary LINK tokens and Sepolia ETH before proceeding with the deployment and testing.

## Reference:
- https://docs.chain.link/chainlink-nodes
