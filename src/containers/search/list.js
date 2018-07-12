import { connect } from 'react-redux';
import List from '../../components/search/list';

const mapStateToProps = (state) => {
    const { search: { result, isFetching } } = state;

    return {
        isFetching,
        items: result,
    }
};

export default connect(mapStateToProps)(List)