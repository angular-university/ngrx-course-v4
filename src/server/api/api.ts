
import {Application} from 'express';
import {apiGetAllThreads} from "./apiGetAllThreads";
import {apiGetThreadDetail} from "./apiGetThreadDetail";





export function initApi(app: Application) {

    apiGetAllThreads(app);
    apiGetThreadDetail(app);

}