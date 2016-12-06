

import {MessageVM} from "./message.vm";


export interface ThreadDetailVM {
    id:number;
    participantNames:string;
    messages: MessageVM[];
}