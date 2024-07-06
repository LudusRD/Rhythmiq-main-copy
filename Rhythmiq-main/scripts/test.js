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

    // Здесь добавляем код для тестирования контрактов

    const result = await client.contracts.run({
    address: contractAddress,
    functionName: 'getBalance',
    input: {},
    keyPair: keyPair,
    });

    console.log('Balance:', result.output);

    console.log('Tests complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error running tests:', error);
    process.exit(1);
  }
}

main();