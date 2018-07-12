import { ITEMS_RECEIVE, ITEMS_REQUEST, ITEMS_REQUEST_END } from '../constants';

const initialState = {
    result: [],
    isFetching: false
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ITEMS_RECEIVE: {
            const { result: { hits } } = action.payload;

            return Object.assign({}, state, { result: hits });
        }

        case ITEMS_REQUEST: {
            return Object.assign({}, state, { isFetching: true });
        }

        case ITEMS_REQUEST_END: {
            return Object.assign({}, state, { isFetching: false });
        }

        default: {
            return state;
        }
    }
}
