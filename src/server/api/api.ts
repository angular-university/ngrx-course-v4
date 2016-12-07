
import {Application} from 'express';
import {apiGetThreadDetail} from "./apiGetThreadDetail";
import {apiSaveNewMessage} from "./apiSaveNewMessage";
import {apiGetAllThreadsPerUser} from "./apiGetAllThreadsPerUser";





export function initApi(app: Application) {

    apiGetAllThreadsPerUser(app);
    apiGetThreadDetail(app);
    apiSaveNewMessage(app);
}