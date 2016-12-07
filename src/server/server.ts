

import * as express from "express";
import {Application} from 'express';
import {initApi} from "./api/api";
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app: Application = express();

app.use(cookieParser());
app.use(bodyParser.json());


initApi(app);



app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});
