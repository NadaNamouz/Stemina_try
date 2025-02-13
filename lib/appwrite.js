import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite endpoint
    .setProject('67aa5cda0003ead63ae4'); // Project id

const databases = new Databases(client);
const DATABASE_ID = '67aa5d5e001cba24e9e7'; //DB id
const COLLECTION_ID = '67aa5d92002712cdff14'; //Collection id

export { client, databases, DATABASE_ID, COLLECTION_ID };
