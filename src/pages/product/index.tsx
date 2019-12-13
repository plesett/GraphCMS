import React, { Component } from 'react';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../../store/type/index';

interface Props {
    name:string
}
export class Product extends Component<Props> {

    render() {
        const { name } = this.props;
        return (
            <div>
                {name}
            </div>
        )
    }
}

const mapStateToProps = (state:StoreState) => ({
    
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
