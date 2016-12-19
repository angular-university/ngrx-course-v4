
import {Application,Request,Response} from 'express';


export function apiGetUserThreads(app:Application) {


    app.route('/api/threads').get((req: Request, res: Response) => {

        const participantId = 1;





    });


}