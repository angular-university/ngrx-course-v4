


import {MessageVM} from "../view-model/message.vm";
import {Participant} from "./participant";




export function buildMessageVmFromMessage({id,participantId, timestamp, text, threadId}, participants: {[key:number]:Participant}): MessageVM {
    return {
        id,
        participantName: participants[participantId].name,
        timestamp,
        text,
        threadId
    }
}
