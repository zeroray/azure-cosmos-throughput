const { CosmosClient } = require('@azure/cosmos');

const accountEndpoint = 'https://youcount.documents.azure.com'; // :10255
const accountKey = 'XXXXXXXXXXXXX==';
const databaseId = 'mytest';
 
const endpoint = accountEndpoint; // Add your endpoint
const key = accountKey; // Add the masterkey of the endpoint
const client = new CosmosClient({ endpoint, key });
 
const databaseDefinition = { id: "mytest3" };
const collectionDefinition = { id: "fourth" };

const requestOptions = {
    offerThroughput: 600
  };
async function helloCosmos() {
  const { database } = await client.databases.createIfNotExists(databaseDefinition);
  console.log("created database");
 
  const { container } = await database.containers.createIfNotExists(collectionDefinition, requestOptions);
  console.log("created collection with RU: ", requestOptions.offerThroughput);
}
 
helloCosmos().catch(err => {
  console.error(err);
});