

export interface Thread {

    id:number;
    messageIds: number[];
    participants: {[key:number]: number}

}