import React, { Component } from 'react';
import TaskService from '../../Services/TaskService';
import { Row, Col } from 'react-bootstrap';


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
            <Row className="task" id={"task-" + task.taskId} style={{padding: "10px"}}>
                <Col xs={10} xsOffset={0}>
                    <TaskDetails style={{pading: "10px"}}task={task} />
                </Col>
            </Row>
        )
    }
}

export default class TaskList extends Component {
    constructor() {
        super();
        this.state = {};
    }

    async componentWillMount() {
        const tasks = await TaskService.getTasks();
        console.log(tasks);
        this.setState({tasks});
    }

    render() {
        const { tasks } = this.state;
        console.log(tasks);
        return (
            <Row id="tasks">
                <Col xs={12}>
                    {
                        (tasks && tasks.length > 0)?
                            tasks.map(task => <Task  key={task.taskId} task={task} />):
                            (<div id="no-task-found" className="no-task-found">
                                There are no tasks at present.
                            </div>)
                    }
                </Col>
            </Row>
        )
    }
}