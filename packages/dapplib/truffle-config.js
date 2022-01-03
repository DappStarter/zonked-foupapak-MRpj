require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift rebel saddle puppy gesture loan food gasp'; 
let testAccounts = [
"0x1060ce5cdc483b70ebc71102f2edefea40a036616e8eb341ae8037692abf08ab",
"0xf78613e70ea6e4796f73bb24c7a3f91dc9011761dc69aab3b84f78d7ff235b68",
"0x43b9d65f8862ba3c4a5f08cd69f1915f4563d9eb782482ea72ae62b50f3e5204",
"0x784d7b7fb9a0ba979e0e0f36feb2926e7763c10be6a35eaf271da5c8715802bf",
"0x854640a2c9fce7752bbad4e795773d52da6c68869569dd3e5cee88918cbf5a83",
"0x60733d3fa5efbe9a71676f4ca30445d41005908cddde065607973917cc41df7c",
"0xc67bd4db4e169f09e6f43be5dfefdf9b220bd255c94ff8d580f86813a843d537",
"0xe7d34e16ef1e988411e37b7053cc2fb272943117ef7fe360a92fb92f64e6d84b",
"0xa506174d9f88b010a82518a39ce3dc5e1ce4683730fb68ad7fcfc1e8c2753038",
"0xae31c936730e85421813cedad78e74324d39aa0a6b24755c8c7027c4cb101f41"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

