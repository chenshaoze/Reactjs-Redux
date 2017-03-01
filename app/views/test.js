import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {actions} from '../actions/';
import { Button, ButtonToolbar,Grid,Row,Col } from 'react-bootstrap';

class Test extends Component {

    render() {
        const {countState, increase, decrease} = this.props;
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={8} md={12} >
                      <h1 className="text-center m-t-lg">计数：{countState.count}</h1>
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} sm={4} md={6}>
                    
                      <Button bsStyle="primary" className="center-block" bsSize="large" onClick={()=>increase(1)} >增加</Button>
                      
                    </Col>
                    <Col xs={12} sm={4} md={6}>
                      <Button bsSize="large" className="center-block" onClick={()=>decrease(1)} >减少</Button>
                    </Col>
                </Row>
            </Grid>
              
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        countState: state.countState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increase: bindActionCreators(actions.increase, dispatch),
        decrease: bindActionCreators(actions.decrease, dispatch)
    }
}

Test = connect(mapStateToProps, mapDispatchToProps)(Test)

export default Test