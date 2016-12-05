


import {Participant} from "../model/participant";
import {Thread} from "../model/thread";
import {Message} from "../model/message";


export const dbParticipants: {[key:number]:Participant} = {
    1: {
        id: 1,
        name: 'Mom'
    },
    2: {
        id: 2,
        name: 'Dad'
    },
    3: {
        id: 3,
        name: 'Hugo'
    },
    4: {
        id: 4,
        name: 'Alice'
    },
    5: {
        id: 5,
        name: 'Clara'
    }
};



export const dbThreads: {[key:number]: Thread} = {
    1: {
        id: 1,
        participantIds: [1, 2],
        messageIds: [1, 2 ,3 ,4, 5]
    },
    2: {
        id: 2,
        participantIds: [ 1, 3 , 4, 5 ],
        messageIds: [6, 7, 8, 9, 10]
    },
    3: {
        id: 3,
        participantIds: [],
        messageIds: [11, 12 ,13 ,14]
    }
};


export const dbMessages: {[key:number]: Message} = {

    1: {
        id: 1,
        threadId: 1,
        participantId: 1,
        text: 'Did you take take out the trash today ?',
        timestamp: new Date().getTime()

    },
    2: {
        id: 2,
        threadId: 1,
        participantId: 2,
        text: 'What, is it full AGAIN ?!',
        timestamp: new Date().getTime()
    },
    3: {
        id: 3,
        threadId: 1,
        participantId: 1,
        text: 'Yes like every day ! Can you take it out now ? ',
        timestamp: new Date().getTime()
    },
    4: {
        id: 4,
        threadId: 1,
        participantId: 2,
        text: 'OK, no problem',
        timestamp: new Date().getTime()
    },
    5: {
        id: 5,
        threadId: 1,
        participantId: 1,
        text: 'BTW when are you planning on hanging these paintings on the wall ?',
        timestamp: new Date().getTime()
    },
    6: {
        id: 6,
        threadId: 2,
        participantId: 1,
        text: 'Who made this mess ? this living room is a disaster ',
        timestamp: new Date().getTime()
    },
    7: {
        id: 7,
        threadId: 2,
        participantId: 3,
        text: 'Not me, I was just playing basketball Mom',
        timestamp: new Date().getTime()
    },
    8: {
        id: 8,
        threadId: 2,
        participantId: 4,
        text: 'Not me, I was just doing some coloring Mom ',
        timestamp: new Date().getTime()
    },
    9: {
        id: 9,
        threadId: 2,
        participantId: 5,
        text: 'ggaaaaaggaaaaaaaaaaaa maaaammmaaaaaa',
        timestamp: new Date().getTime()
    },
    10: {
        id: 10,
        threadId: 2,
        participantId: 1,
        text: 'Clean everything up NOW ;-) !',
        timestamp: new Date().getTime()
    },
    11: {
        id: 11,
        threadId: 3,
        participantId: 2,
        text: 'Everyone come to the table, dinner is ready ',
        timestamp: new Date().getTime()
    },
    12: {
        id: 12,
        threadId: 3,
        participantId: 3,
        text: 'No dad Im watching this cartoon its not over yet ',
        timestamp: new Date().getTime()
    },
    13: {
        id: 13,
        threadId: 3,
        participantId: 4,
        text: 'No dad we want to keep watching TV too its my favorite show ',
        timestamp: new Date().getTime()
    },
    14: {
        id: 14,
        threadId: 3,
        participantId: 5,
        text: 'gaaaggggaaaaaaaaaa mhmaam mhaammmm mmaaammaaa paaappppaaaaa',
        timestamp: new Date().getTime()
    },
    15: {
        id: 15,
        threadId: 3,
        participantId: 1,
        text: 'Maybe later, I\'m not hungry ',
        timestamp: new Date().getTime()
    },
    16: {
        id: 16,
        threadId: 2,
        participantId: 1,
        text: 'Put that on pause and come to the table, the dinner will be cold',
        timestamp: new Date().getTime()
    }

};


















