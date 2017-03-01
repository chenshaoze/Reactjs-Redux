import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends Component {

	render() {
		return (
			<div className="ibox-title">
				<Grid>
					<Row xs={12}>
						<Col sm={2} md={4}>
								<h5>学生信息管理</h5>
						</Col>
						<Col xs={3} >
								<input type="text" placeholder="搜索" className="input-sm form-control"/>							
						</Col>
						<Col sm={4}>
							<div className="dt-buttons btn-group">
								<button className="btn btn-default buttons-html5" tabindex="0" aria-controls="DataTables_Table_0" ><span>添加</span></button>
								<button className="btn btn-default  buttons-html5" tabindex="0" aria-controls="DataTables_Table_0" ><span>导出</span></button>
								<button className="btn btn-default buttons-print" tabindex="0" aria-controls="DataTables_Table_0" ><span>打印</span></button>
							</div>
						</Col>

					</Row>
				</Grid>
			</div>
			)
	}
}

export default Header