import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Tab2Service from '../../Services/Tab2Service';


export default class TaskTab2 extends Component {
    constructor() {
        super();
        this.state = {};
    }
    async componentWillMount() {
        const { task } = this.props;
        const tabData = await Tab2Service.getTab2Data(task.taskId, 0, 1);
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