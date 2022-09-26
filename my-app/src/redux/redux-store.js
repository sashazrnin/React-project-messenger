import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunk from "redux-thunk"
import AppReducer from "./AppReducer";

let Redusers = combineReducers(
    {
            profilePage: ProfileReducer,
            MessagesPage: MessagesReducer,
            DialogsPage: DialogsReducer,
            UsersPage: UsersReducer,
            auth: AuthReducer,
            app: AppReducer
    }
)

let store = legacy_createStore(Redusers, applyMiddleware(thunk))

window.store = store

export default store