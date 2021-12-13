import axios from "axios";
import * as https from "https";

//https.globalAgent.options.rejectUnauthorized = false;

export const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});
