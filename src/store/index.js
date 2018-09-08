import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import playlistReducer from "./reducers/playlistsReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const allReducers = combineReducers({
    root: rootReducer,
    playlist: playlistReducer
});
// const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(logger));
const store = composeWithDevTools(applyMiddleware(thunk, logger))(createStore)(
    allReducers
);

export default store;
