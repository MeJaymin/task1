import { combineReducers } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import AppNavigator from "../appRouteConfig";
import Auth from "../store/Auth/reducers";

const navReducer = createNavigationReducer(AppNavigator);
const rootReducer = combineReducers({
    nav:navReducer,
    auth:Auth
});

export default rootReducer;