import { LOADING, ERROR } from "../action-types";

export const isLoading = pending => ({
    type: LOADING,
    pending
});

export const isError = (isError, exception) => ({
    type: ERROR,
    isError,
    exception
});
