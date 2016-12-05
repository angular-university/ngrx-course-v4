


import {Participant} from "../model/participant";
import {Thread} from "../model/thread";
import {Message} from "../model/message";


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
        messageIds: [11, 12 ,13 ,14]
    }
];


export const messages: Message[]  = [
    {
        id: 1,
        threadId: 1,
        participantId: 1,
        text: 'Did you take take out the trash today ?'
    },
    {
        id: 2,
        threadId: 1,
        participantId: 2,
        text: 'What, is it full AGAIN ?!'
    {
        id: 3,
        threadId: 1,
        participantId: 1,
        text: 'Yes like every day ! Can you take it out now ? '
    },
    {
        id: 4,
        threadId: 1,
        participantId: 2,
        text: 'OK, no problem'
    },
    {
        id: 5,
        threadId: 1,
        participantId: 1,
        text: 'BTW when are you planning on hanging these paintings on the wall ?'
    },
    {
        id: 6,
        threadId: 2,
        participantId: 1,
        text: 'Who made this mess ?? this living room is a disaster ! '
    },
    {
        id: 7,
        threadId: 2,
        participantId: 3,
        text: 'Not me, I was just playing basketball Mom'
    },
    {
        id: 8,
        threadId: 2,
        participantId: 4,
        text: 'Not me, I was just doing some coloring Mom '
    },
    {
        id: 9,
        threadId: 2,
        participantId: 5,
        text: 'ggaaaaaggaaaaaaaaaaaa maaaammmaaaaaa'
    },
    {
        id: 10,
        threadId: 2,
        participantId: 1,
        text: 'Clean everything up NOW ;-) !'
    },
    {
        id: 11,
        threadId: 3,
        participantId: 2,
        text: 'Everyone come to the table, dinner is ready !'
    },
    {
        id: 12,
        threadId: 3,
        participantId: 3,
        text: 'No dad Im watching this cartoon its not over yet !'
    },
    {
        id: 13,
        threadId: 3,
        participantId: 4,
        text: 'No dad we want to keep watching TV too its my favorite show !'
    },
    {
        id: 14,
        threadId: 3,
        participantId: 5,
        text: 'gaaaggggaaaaaaaaaa chiiippppssssss mhmaam mhaammmm'
    }
    ,
    {
        id: 15,
        threadId: 3,
        participantId: 1,
        text: 'Maybe later, I\'m not hungry (as usual) ...'
    },
    {
        id: 16,
        threadId: 2,
        participantId: 1,
        text: 'What ?! I cooked dinner for nothing ?? Everybody comes to the table now, turn off the TV ! ;-)'
    }
];

















