import Home from './index';
import * as actions from '../../store/actions/';
import { connect } from 'react-redux';
import { StoreState } from '../../store/type';

export function mapStateToProps({ enthusiasmLevel, languageName, info }: StoreState) {
    return {
        count: enthusiasmLevel,
        name: languageName,
        info: info,
    }
}

export function mapDispatchToProps(dispatch: any) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        getDataTest: () => dispatch(actions.getDataList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
