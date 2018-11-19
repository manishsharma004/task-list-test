import React, { Component } from 'react';
import TaskService from '../../Services/TaskService';
import { Row, Col, Tabs, Tab, Button, Collapse } from 'react-bootstrap';
import Tab1Service from '../../Services/Tab1Service';
import Tab3Service from '../../Services/Tab3Service';
import Tab2Service from '../../Services/Tab2Service';

import TaskTab1 from './TaskTab1';
import TaskTab2 from './TaskTab2';
import TaskTab3 from './TaskTab3';

class TaskDetails extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { task } = this.props;
        const { taskName } = task;

        return (
            <Row className="task-details">
                <Col xs={3}>
                    <div className="name">{taskName}</div>
                </Col>
                <Col xs={3}>
                    <div className="name">{taskName}</div>
                </Col>
                <Col xs={3}>
                    <div className="name">{taskName}</div>
                </Col>
                <Col xs={3}>
                    <Button onClick={(event) => this.props.onClick(event, task)}>{this.props.isOpen? 'Close': 'Open'}</Button>
                </Col>
            </Row>
        );
    }
}

class Task extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { task } = this.props;
        return (
            <div>
                <Row className="task" id={"task-" + task.taskId} style={{padding: "10px", cursor: 'hand'}}>
                    <Col xs={10} xsOffset={0}>
                        <TaskDetails style={{pading: "10px"}} isOpen={this.props.isOpen} task={task} onClick={this.props.onClick}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} xsOffset={1}>
                        <Collapse in={this.props.isOpen}>
                            <Tabs defaultActiveKey={1}>
                                <Tab eventKey={1} title="Tab 1">
                                    <TaskTab1 task={task} />
                                </Tab>
                                <Tab eventKey={2} title="Tab 2">
                                    <TaskTab2 task={task} />
                                </Tab>
                                <Tab eventKey={3} title="Tab 3">
                                    <TaskTab3 task={task} />
                                </Tab>
                            </Tabs>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default class TaskList extends Component {
    constructor() {
        super();
        this.state = {
            loadingTasks: false,
            openedTask: null
        };
    }

    async componentWillMount() {
        await this.setState({loadingTasks: true});
        const tasks = await TaskService.getTasks();
        console.log(tasks);
        await this.setState({tasks, loadingTasks: false});
    }

    handleTaskClick(event, task) {
        // this.setState({openedTask: true});
        console.log('Clicked', this);
        
        if (task && task.taskId) {
            this.setState(({openedTask}) => ({openedTask: openedTask == task.taskId? null: task.taskId}));
        }
    }

    render() {
        const { tasks, openedTask } = this.state;
        console.log(tasks);
        return (
            <Row id="tasks">
                <Col xs={12}>
                    {
                        (tasks && tasks.length > 0)?
                            tasks.map(task => <Task  key={task.taskId}
                                                     task={task}
                                                     isOpen={task.taskId === openedTask}
                                                     onClick={this.handleTaskClick.bind(this)}/>):
                            (<div id="no-task-found" className="no-task-found">
                                There are no tasks at present.
                            </div>)
                    }
                </Col>
            </Row>
        )
    }
}