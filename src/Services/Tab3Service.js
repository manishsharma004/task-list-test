/**
 * 
 * @param {number} n 
 */
const dummyTasks = async (taskId, n) => {
    const tasks = [];
    for(let i=0; i<n; i++) {
        tasks.push({
            taskId,
            tab3DataId: parseInt(10000 + Math.random() * 1000),
            tab3DataName: 'Tab ' + parseInt(10000 + Math.random() * 1000),
        })
    }

    return tasks;
}

const getTab3Data = async (taskId, offset, limit) => {
    offset = (typeof offset !== 'undefined' && offset != null)? offset: 0;
    limit = (typeof limit !== 'undefined' && limit != null)? limit: 10;
    return await dummyTasks(taskId, limit);
}

export default {
    getTab3Data
};