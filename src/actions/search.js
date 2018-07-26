import { ITEMS_RECEIVE, ITEMS_REQUEST, ITEMS_REQUEST_END, API_URL, IMG_ON_PAGE } from '../constants';



export const request = () => ({ type: ITEMS_REQUEST });
export const requestEnd = () => ({ type: ITEMS_REQUEST_END });
export const receive = (result) => ({ type: ITEMS_RECEIVE, payload: { result }});

export const fetchAll = (key, pageNumber=1) => async function (dispatch) {
    dispatch(request());

    const response = await window.fetch(`${API_URL}&q=${key}&page=${pageNumber}&per_page=${IMG_ON_PAGE}`);
    const result = await response.json();

    dispatch(receive(result));

    dispatch(requestEnd());
};