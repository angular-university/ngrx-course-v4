
import {Application} from 'express';
import {apiGetAllThreads} from "./apiGetAllThreads";



export function initApi(app: Application) {


    apiGetAllThreads(app);

}