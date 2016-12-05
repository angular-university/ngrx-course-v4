
import {threads, participants, messages} from "./db-data";
import * as _ from 'lodash';
import * as faker from 'faker';
import {Message} from "../model/message";




const low = require('lowdb');

export const db = low();



db.defaults({ threads })
    .value();


db.defaults({ participants })
    .value();


db.defaults({ messages })
    .value();






/*_.times(100, () => {

    const message: Message = {
        id: Math.random(),
        threadId: 1,
        text: faker.lorem.sentences(),
        read: false
    };

    db.get('messages')
        .push(message)
        .value();
});*/


