import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import playlistReducer from "./reducers/playlistsReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { reducer as toastrReducer } from "react-redux-toastr";

const allReducers = combineReducers({
    root: rootReducer,
    playlist: playlistReducer,
    toastr: toastrReducer
});
// const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(logger));
const store = composeWithDevTools(applyMiddleware(thunk, logger))(createStore)(
    allReducers
);

export default store;
