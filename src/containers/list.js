import { connect } from 'react-redux';
import List from '../components/list';

const mapStateToProps = (state) => {
    const { search: { result, isFetching } } = state;

    return {
        isFetching,
        items: result,
    }
};

export default connect(mapStateToProps)(List)