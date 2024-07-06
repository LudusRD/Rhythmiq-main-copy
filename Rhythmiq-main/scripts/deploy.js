const { TonClient } = require('@tonclient/core');
const { libNode } = require('@tonclient/lib-node');

TonClient.useBinaryLibrary(libNode);

async function main() {
  try {
    const client = new TonClient({
      network: {
        endpoints: ['http://localhost:3000'],
      },
    });

    // Здесь необходимо добавить логику для развертывания контрактов

    const contract = await client.contracts.deploy({
    package: contractPackage,
    constructorParams: {},
    keyPair: keyPair,
    });

    console.log('Contract deployed at:', contract.address);
    
    console.log('Deployment complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error deploying contracts:', error);
    process.exit(1);
  }
}

main();