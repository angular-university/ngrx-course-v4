import {UiState, INITIAL_UI_STATE} from "./ui-state";
import {StoreData, INITIAL_STORE_DATA} from "./store-data";
import {RouterStateUrl} from "./utils";
import * as fromRouter from '@ngrx/router-store';


export interface ApplicationState {
    uiState: UiState,
    storeData: StoreData,
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}


export const INITIAL_APPLICATION_STATE: ApplicationState = {
    uiState: INITIAL_UI_STATE,
    storeData: INITIAL_STORE_DATA,
    routerReducer: undefined
};