import { ITEMS_RECEIVE, ITEMS_REQUEST, ITEMS_REQUEST_END, API_URL, IMG_ON_PAGE } from '../constants';



export const request = () => ({ type: ITEMS_REQUEST });
export const requestEnd = () => ({ type: ITEMS_REQUEST_END });
export const receive = (result, searchText) => ({ type: ITEMS_RECEIVE, payload: { result, searchText }});

export const fetchAll = (key, pageNumber=1) => async function (dispatch) {
    dispatch(request());
    try {
        const response = await window.fetch(`${API_URL}&q=${key}&page=${pageNumber}&per_page=${IMG_ON_PAGE}`);
        const result = await response.json();
        dispatch(receive(result, key));
    } catch (err) {
        dispatch(receive({"errorMsg": "There were some problems with getting data from server"}));
    }
    dispatch(requestEnd());
};