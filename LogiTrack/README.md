
# LogiTrack - Decentralized Supply Chain Management System


## Description

LogiTrack is a blockchain-based supply chain management system designed to enhance transparency and security in the transfer of products from manufacturers to customers. Utilizing Solidity smart contracts, Truffle.js, and Ganache-cli for deployment, this system provides a decentralized and transparent tracking of products at each checkpoint. The frontend is built with React.js, and Web3.js is used for blockchain communication, with Express.js handling dynamic routing to ensure secure data integrity.

## Architecture

The project is structured as follows:

- **Smart Contracts**: Written in Solidity, compiled, migrated, and deployed using Truffle.js on a local blockchain network (Ganache-cli).
- **Frontend**: Built with React.js for efficient component and state management.
- **Blockchain Communication**: Integrated using Web3.js to interact with smart contracts and the local blockchain network.
- **Routing**: Handled by Express.js for dynamic API routing, and Nginx is used as a load balancer.
  


## Working

1. **Product Manufacturing**: The `manufactureProduct()` function records the product and manufacturer details on the blockchain.
2. **Product Transfer**: The product is transferred to a third party seller, updating the `productHistory[]` and calling `purchasedByThirdParty()`.
3. **Online Purchase**: The product is shipped to the customer, with various functions (`shipByThirdParty()`, `receivedByDeliveryHub()`, `shipByDeliveryHub()`, `receivedByCustomer()`) managing the process and updating the product state.
4. **Data Retrieval**: Functions such as `fetchProductPart1()`, `fetchProductPart2()`, and `fetchProductHistoryLength()` retrieve product data and history.
5. **Security**: Hashes for certificates are generated using Solidity's `keccak256()` function, ensuring data integrity and security.


## Installation and Setup

### Prerequisites

- `npm`
- `git`
- Docker (optional)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ishangawande55/LogiTrack.git && cd LogiTrack
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Install Ganache-cli**

   ```bash
   npm install -g ganache-cli
   ```

4. **Run Ganache-cli**

   ```bash
   ganache-cli --accounts 10 --gasLimit 6721975000
   ```

   Or with Docker:

   ```bash
   sudo docker run -d -p 8545:8545 trufflesuite/ganache-cli:latest -h 0.0.0.0 --accounts 10 --gasLimit 6721975000
   ```

5. **Migrate Contracts**

   ```bash
   truffle migrate --network=develop --reset
   ```

6. **Setup Client**

   Navigate to the client directory and install dependencies:

   ```bash
   cd client
   npm install
   ```

   Create an `.env` file with the following content:

   ```bash
   REACT_APP_GOOGLE_MAP_API_KEY=*************************
   REACT_APP_RPC=http://127.0.0.1:8545/
   ```

7. **Run the Application**

   ```bash
   npm start
   ```

   The app will be hosted at port 3000 by default.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

A big thank you to all contributors who helped in making this project a success. Your support and collaboration are greatly appreciated!

## Documentation

- [Solidity Documentation](https://docs.soliditylang.org/en/v0.8.4/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Truffle Documentation](https://www.trufflesuite.com/docs/truffle/reference/configuration)
- [Ganache-cli Documentation](https://www.trufflesuite.com/docs/ganache/overview)
```

Feel free to adjust the content as needed based on your project specifics and preferences.
