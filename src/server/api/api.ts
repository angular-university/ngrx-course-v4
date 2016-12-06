
import {Application} from 'express';
import {apiGetAllThreads} from "./apiGetAllThreads";
import {apiGetThreadDetail} from "./apiGetThreadDetail";
import {apiSaveNewMessage} from "./apiSaveNewMessage";





export function initApi(app: Application) {

    apiGetAllThreads(app);
    apiGetThreadDetail(app);
    apiSaveNewMessage(app);
}