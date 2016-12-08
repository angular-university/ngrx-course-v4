


import {MessageVM} from "../view-model/message.vm";
import {dbParticipants} from "../db/db-data";



export function buildMessageVmFromMessage({id,participantId, timestamp, text}): MessageVM {
    return {
        id,
        participantName: dbParticipants[participantId].name,
        timestamp,
        text
    }
}
