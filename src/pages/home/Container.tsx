import Home from './Home';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { StoreState } from '../../store/type';

export function mapStateToProps({ Header }: StoreState) {
    return {
        Header
    }
}

export function mapDispatchToProps(dispatch: any) {
    return {
        HeaderInfo: () => dispatch(actions.HeaderInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
