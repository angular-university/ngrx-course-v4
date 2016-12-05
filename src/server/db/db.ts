

import {Message} from "../model/message";
import {threads} from "./db-data";
const low = require('lowdb');

export const db = low();


db.defaults({ threads: threads })
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


