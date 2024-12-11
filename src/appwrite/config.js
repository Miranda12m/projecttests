import { Client, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6754b8b5003e729cd5bb');

export const databases = new Databases(client);