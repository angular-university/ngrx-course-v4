

import {Routes} from "@angular/router";
import {MultiActorComponent} from "./app/multi-actor/multi-actor.component";
import {FormUndoComponent} from "./app/form-undo/form-undo.component";
import {MasterDetailComponent} from "./app/master-detail/master-detail.component";


export const routerConfig: Routes = [
    {
        path: 'multi-actor',
        component: MultiActorComponent
    },
    {
        path: 'form-undo',
        component: FormUndoComponent
    },
    {
        path: 'master-detail',
        component: MasterDetailComponent
    }

];

