
import {Application} from 'express';
import {apiSaveNewMessage} from "./apiSaveNewMessage";
import {apiUpdateThread} from "./apiMarkThreadAsReadByUser";
import {apiMessageNotificationsPerUser} from "./apiMessageNotificationsPerUser";
import {apiGetParticipantById} from "./apiGetParticipantById";
import {apiGetUserThreads} from "./apiGetUserThreads";





export function initApi(app: Application) {

    apiGetParticipantById(app);
    apiGetUserThreads(app);

    apiSaveNewMessage(app);
    apiUpdateThread(app);
    apiMessageNotificationsPerUser(app);

}