import React, { Component } from 'react';
import * as actions from '../../store/actions/';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

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

const mapStateToProps = (state:any) => ({
    
})

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
