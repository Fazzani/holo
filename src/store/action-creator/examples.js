import { FETCH_VIDEO_EXAMPLES_SUCCESS } from "../action-types";
import { API_URL } from "../consts";
import { isError, isLoading } from "../action-creator";

export const fetchedExamples = examples => ({
    type: FETCH_VIDEO_EXAMPLES_SUCCESS,
    examples
});

export function fetchExamples() {
    return dispatch => {
        dispatch(isLoading(true));

        fetch(`${API_URL}examples/list`)
            .then(response => {
                dispatch(isLoading(false));
                if (response.ok) {
                    return response.json();
                }
                throw new Error("404");
            })
            .then(examples => dispatch(fetchedExamples(examples)))
            .catch(e => dispatch(isError(true, e)));
    };
}
