export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataSuccess = (users) => ({ type: FETCH_DATA_SUCCESS, payload: users });
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

