

import {Message} from "./model/message";
import {Thread} from "./model/thread";

export const participants: Participant[] = [
    {
        id: 1,
        name: 'Mom'
    },
    {
        id: 2,
        name: 'Dad'
    },
    {
        id: 3,
        name: 'Hugo'
    },
    {
        id: 4,
        name: 'Alice'
    },
    {
        id: 5,
        name: 'Clara'
    }
];



export const threads: Thread[] = [
    {
        id: 1,
        participantIds: [1, 2],
        messageIds: [1, 2 ,3 ,4, 5]
    },
    {
        id: 2,
        participantIds: [ 1, 3 , 4, 5 ],
        messageIds: [6, 7, 8, 9, 10]
    },
    {
        id: 3,
        participantIds: [],
        messageIds: []
    }
];


export const messages: Message[]  = [
    {
        id: 1,
        threadId: 1,
        participantId: 1,
        text: 'Did you take take out the trash today ?',
        read: false
    },
    {
        id: 2,
        threadId: 1,
        participantId: 2,
        text: 'What, is it full AGAIN ?!',
        read: false
    },
    {
        id: 3,
        threadId: 1,
        participantId: 1,
        text: 'Yes like every day ! Can you take it out now ? ',
        read: false
    },
    {
        id: 4,
        threadId: 1,
        participantId: 2,
        text: 'OK, no problem',
        read: false
    },
    {
        id: 5,
        threadId: 1,
        participantId: 1,
        text: 'BTW when are you planning on hanging these paintings on the wall ?',
        read: false
    },
    {
        id: 6,
        threadId: 2,
        participantId: 1,
        text: 'Who made this mess ?? this living room is a disaster ! ',
        read: false
    },
    {
        id: 7,
        threadId: 2,
        participantId: 3,
        text: 'Not me, I was just playing basketball Mom',
        read: false
    },
    {
        id: 8,
        threadId: 2,
        participantId: 4,
        text: 'Not me, I was just doing some coloring Mom ',
        read: false
    },
    {
        id: 9,
        threadId: 2,
        participantId: 5,
        text: 'ggaaaaaggaaaaaaaaaaaa maaaammmaaaaaa',
        read: false
    },
    {
        id: 10,
        threadId: 2,
        participantId: 1,
        text: 'Clean everything up NOW !!',
        read: false
    },
    {
        id: 11,
        threadId: 3,
        participantId: 2,
        text: 'Hey Hugo, Want to go outside and play football with Dad ??',
        read: false
    },
    {
        id: 12,
        threadId: 3,
        participantId: 3,
        text: 'No dad Im very busy, Im reading this book !',
        read: false
    },
    {
        id: 13,
        threadId: 3,
        participantId: 2,
        text: 'What do you mean you\'re busy, you\'re only 5 ! Besides you can\'t read yet LOL ',
        read: false
    },
    {
        id: 14,
        threadId: 3,
        participantId: 3,
        text: 'Sigh OK let\'s go to the park then, but just a little OK ?',
        read: false
    }
];

















