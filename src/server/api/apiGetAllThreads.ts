

import {Application} from 'express';
import {db} from "../db/db";




export function apiGetAllThreads(app: Application) {

    app.route('/threads').get((req, res) => {

        const threads = db.get("threads").value();

        res.status(200).json({payload:threads});

    });

}


