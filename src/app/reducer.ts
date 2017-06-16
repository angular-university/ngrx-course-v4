
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import { combineReducers} from "@ngrx/store";
import {uiState} from "./store/reducers/uiStateReducer";
import {storeData} from "./store/reducers/uiStoreDataReducer";
import {routerReducer} from "@ngrx/router-store";

export const reducer = compose(storeFreeze, combineReducers)({uiState,storeData, router: routerReducer});
