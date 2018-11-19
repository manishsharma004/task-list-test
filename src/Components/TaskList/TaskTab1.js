import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Tab1Service from '../../Services/Tab1Service';


export default class TaskTab1 extends Component {
    constructor() {
        super();
        this.state = {};
    }
    async componentWillMount() {
        const { task } = this.props;
        const tabData = await Tab1Service.getTabData(task.taskId, 0, 1);
        this.setState({tabData});
    }

    render() {
        const { tabData } = this.state;
        return (
            <Row>
                <Col xs={12}>
                    {
                        tabData? (<div style={{padding: '10px'}}><pre>{JSON.stringify(tabData, null, '    ')}</pre></div>): 'No Data'
                    }
                </Col>
            </Row>
        );
    }
}