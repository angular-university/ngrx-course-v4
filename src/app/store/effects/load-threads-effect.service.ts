import { Injectable } from '@angular/core';
import {ThreadsService} from "../../services/threads.service";
import {Actions, Effect} from "@ngrx/effects";
import {LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction} from "../actions";



@Injectable()
export class LoadThreadsEffectService {

  constructor(private actions$: Actions, private threadsService: ThreadsService) {

  }


  @Effect() userThreads$ = this.actions$
      .ofType(LOAD_USER_THREADS_ACTION)
      .switchMap(() => this.threadsService.loadUserThreads())
      .map(allUserData => new UserThreadsLoadedAction(allUserData) );

}
