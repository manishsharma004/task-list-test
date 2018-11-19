import React, { Component } from 'react';
import TaskService from '../../Services/TaskService';


class TaskDetails extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { task } = this.props;
        const { taskName } = task;

        return (
            <div className="task-details">
                <div className="name">{taskName}</div>
            </div>
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
            <div className="task" id={"task-" + task.taskId}>
                <TaskDetails task={task} />
            </div>
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
            <div id="tasks">
                {
                    (tasks && tasks.length > 0)?
                        tasks.map(task => <Task  key={task.taskId} task={task} />):
                        (<div id="no-task-found" className="no-task-found">
                            There are no tasks at present.
                        </div>)
                }
            </div>
        )
    }
}