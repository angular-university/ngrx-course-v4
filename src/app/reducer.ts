
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import {Action, combineReducers} from "@ngrx/store";
import {uiState} from "./store/reducers/uiStateReducer";
import {storeData} from "./store/reducers/uiStoreDataReducer";
import {routerReducer} from "@ngrx/router-store";
import {ApplicationState} from "./store/application-state";

export const combinedReducer = compose(storeFreeze, combineReducers)({uiState,storeData, router: routerReducer});




export function storeReducer(state: ApplicationState, action: Action) {
    return combinedReducer(state, action);
}
