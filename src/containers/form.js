import { connect } from 'react-redux';
import Form from '../components/form';
import { fetchAll as fetch } from '../actions/search';

const mapDispatchToProps = {
    fetch,
};

export default connect(null, mapDispatchToProps)(Form)