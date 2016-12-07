


export interface Thread {
    id:number;
    participantIds: number[];
    messageIds: number[];
    readStatusByParticipant: {[key:number]: boolean};
}


