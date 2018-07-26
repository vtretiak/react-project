import { connect } from 'react-redux';
import Pagination from '../components/pagination';
import { fetchAll as fetch } from '../actions/search';

const mapStateToProps = (state) => {
    const { search: { totalHits } } = state;

    return {
        totalHits: totalHits
    }
};

const mapDispatchToProps = {
    fetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)