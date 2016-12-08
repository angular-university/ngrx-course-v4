
import {Application} from 'express';
import {apiGetThreadDetail} from "./apiGetThreadDetail";
import {apiSaveNewMessage} from "./apiSaveNewMessage";
import {apiGetAllThreadsPerUser} from "./apiGetAllThreadsPerUser";
import {apiUpdateThread} from "./apiMarkThreadAsReadByUser";
import {apiMessageNotificationsPerUser} from "./apiMessageNotificationsPerUser";





export function initApi(app: Application) {

    apiGetAllThreadsPerUser(app);
    apiGetThreadDetail(app);
    apiSaveNewMessage(app);
    apiUpdateThread(app);
    apiMessageNotificationsPerUser(app);

}