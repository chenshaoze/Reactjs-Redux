import React, { Component } from 'react';
import Header from '../components/StudentManage/Header'
import Body from '../components/StudentManage/Body'

class Main extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <Header/>
                            <Body/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Main