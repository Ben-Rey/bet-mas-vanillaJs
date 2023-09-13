import "./style.css";

import { initializeClient } from "./initClient.js";

const client = await initializeClient();

console.log("Client:", client);
