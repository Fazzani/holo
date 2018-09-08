import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import playlistReducer from "./reducers/playlistsReducer";

const allReducers = combineReducers({
    root: rootReducer,
    playlist: playlistReducer
});
// const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(logger));
const store = compose(
    applyMiddleware(thunk, logger)
    //   window.devToolsExtension && window.devToolsExtension(),
)(createStore)(allReducers);

export default store;
