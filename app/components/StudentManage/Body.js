import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {actions} from '../../actions/studentManageActions';

class Body extends Component {

	componentWillMount() {
		this.props.loadStudentInfo()
	}

	render() {
		const {students} = this.props.studentManage
		console.log(students)
		return (
			<div className="ibox-content">
				<div className="table-responsive">
          <table className="table table-striped table-bordered table-hover dataTables-example">
            <thead>
              <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>所属学院</th>
                <th>校园卡号</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            	{students.map((student, index)=>{
            		return (
            			<tr key={index}>
	            			<td>{index}</td>
		            		<td>{student.name}</td>
		            		<td>{student.college}</td>
		            		<td>{student.card}</td>
		            		<td></td>
	            		</tr>
            		)
            	})}
            </tbody>
          </table>
        </div>
			</div>
			);
	}
}


const mapStateToProps = (state, ownProps) => {
    return {
        studentManage: state.studentManageState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadStudentInfo: bindActionCreators(actions.loadStudentInfo, dispatch)
    }
}

Body = connect(mapStateToProps, mapDispatchToProps)(Body)

export default Body