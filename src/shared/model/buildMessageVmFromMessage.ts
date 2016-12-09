


import {MessageVM} from "../view-model/message.vm";
import {dbParticipants} from "../../server/db/db-data";




export function buildMessageVmFromMessage({id,participantId, timestamp, text, threadId}): MessageVM {
    return {
        id,
        participantName: dbParticipants[participantId].name,
        timestamp,
        text,
        threadId
    }
}
