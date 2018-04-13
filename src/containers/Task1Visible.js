import {connect} from 'react-redux';
import Task1Component from '../components/Task1Component';
import {editCodeTask1, makeTaskAvailable} from "../actions";

const mapStateToProps = (state) => {
    return {
        currentCodeTask1: state.Tasks.currentCodeTask1,
        currentTask: state.Tasks.currentTask,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        editCodeTask1: (taskId) => dispatch(editCodeTask1(taskId)),
        makeTaskAvailable: (taskId) => dispatch(makeTaskAvailable(taskId)),
    }
};

const Task1Visible = connect(mapStateToProps, mapDispatchToProps)(Task1Component);

export default Task1Visible;