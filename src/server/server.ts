
import * as _ from 'lodash';

import * as faker from 'faker';
import {Message} from "./model/message";
import * as express from "express";
import {Application} from 'express';
const bodyParser = require('body-parser');

const low = require('lowdb');

const db = low();


db.defaults({ messages: [] })
    .value();



_.times(100, () => {

    const message: Message = {
        id: Math.random(),
        threadId: 1,
        text: faker.lorem.sentences(),
        read: false
    };

    db.get('messages')
        .push(message)
        .value();
});


const app: Application = express();

app.use(bodyParser.json());



app.route('/messages').get((req, res) => {

    const messages = db.get("messages").value();

    res.status(200).json({payload:messages});

});



app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});
