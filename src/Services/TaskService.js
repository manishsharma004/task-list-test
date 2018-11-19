
/**
 * 
 * @param {number} n 
 */
const dummyTasks = async (n) => {
    const tasks = [];
    for(let i=0; i<n; i++) {
        tasks.push({
            taskId: parseInt(10000 + Math.random() * 1000),
            taskName: 'Task ' + parseInt(10000 + Math.random() * 1000),
        })
    }

    return tasks;
}

const getTasks = async (offset, limit) => {
    offset = (typeof offset !== 'undefined' && offset != null)? offset: 0;
    limit = (typeof limit !== 'undefined' && limit != null)? limit: 10;
    return await dummyTasks(limit);
}

export default {
    getTasks
};