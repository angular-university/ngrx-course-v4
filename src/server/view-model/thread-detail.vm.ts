

import {MessageVM} from "./message.vm";


export interface ThreadDetailVM {
    participantNames:string;
    messages: MessageVM[];
}