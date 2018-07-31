import { connect } from 'react-redux';
import Pagination from '../components/pagination';
import { fetchAll as fetch } from '../actions/search';

const mapStateToProps = (state) => {
    const { search: { totalHits, searchText } } = state;

    return {
        totalHits: totalHits,
        searchText: searchText
    }
};

const mapDispatchToProps = {
    fetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)