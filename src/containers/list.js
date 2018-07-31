import { connect } from 'react-redux';
import List from '../components/list';

const mapStateToProps = (state) => {
    const { search: { result, isFetching, errorMsg } } = state;

    return {
        isFetching,
        items: result,
        errorMsg: errorMsg
    }
};

export default connect(mapStateToProps)(List)