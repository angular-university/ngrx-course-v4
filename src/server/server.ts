

import * as express from 'express';
import {Application} from 'express';
import {apiGetUserThreads} from "./api/apiGetUserThreads";
import {apiSaveNewMessage} from "./api/apiSaveNewMessage";
import {apiMessageNotificationsPerUser} from "./api/apiMessageNotificationsPerUser";
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());


apiGetUserThreads(app);
apiSaveNewMessage(app);
apiMessageNotificationsPerUser(app);



app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});