require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain modify grace opinion sudden spoon'; 
let testAccounts = [
"0xd86a6a61c4849b11adb9948873c4bfb4a87d1cc99dd5344875ccc6aebd49641d",
"0x47cb66bbb20ed54845175d78c53dea96937542466ef5289e3cae1ab1a56ce46d",
"0xcde73e2b957bbf3fd33f8f1d5f6dbd3ed9cccff8516e47bfacb834b6bc9f9b1c",
"0x6cfa083d1a32d7c4cd561eed455b76d715fb37701e1152facc03c305898b715e",
"0x81a487bdbf610f20e9c4c955e6bd01dc28e299a4b0f18b88d6f58a52b424f71b",
"0xef7b7da90f676cf27023b4cff09141f375e55c99b0dd74b15b0b491ae6ceae04",
"0x60596ff557d23f9d0a83830432a1b7061cdf88587de4d6e3eab2850a17788851",
"0xfdf389dc5a6262edd3d6fca8cc9d198b9f994d08b1792b81b1760ee72bbcb7ec",
"0x52c429e65270a46f178dfc7b5c35621f40ee4d382c5b4889f827ef4eab072d0b",
"0xbd409c28091d291c5dc08e1bfc26b831aad9010f2ea8ccd7b27f9b6dd3daaa04"
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

