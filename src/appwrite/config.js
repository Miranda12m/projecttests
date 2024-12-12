import { Client, Databases, Account, OAuthProvider } from "appwrite";

const client = new Client();

const databases = new Databases(client);
const account = new Account(client)

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6754b8b5003e729cd5bb');

export {databases, account, OAuthProvider}