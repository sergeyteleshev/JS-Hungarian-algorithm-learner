import {connect} from 'react-redux';
import TasksAppComponent from '../components/TasksAppComponent';
import {goAnotherTask} from '../actions/index';

const mapStateToProps = (state) => {
    return {
        currentTask: state.Tasks.currentTask,
        isOpenedTask1: state.Tasks.isOpenedTask1,
        isOpenedTask2: state.Tasks.isOpenedTask2,
        isOpenedTask3: state.Tasks.isOpenedTask3,
        isOpenedTask4: state.Tasks.isOpenedTask4,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        goAnotherTask: (taskId) => dispatch(goAnotherTask(taskId)),
    }
};

const TasksAppVisible = connect(mapStateToProps, mapDispatchToProps)(TasksAppComponent);

export default TasksAppVisible;