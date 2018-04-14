import {connect} from 'react-redux';
import Task1Component from '../components/Task1Component';
import {closeTaskDoneDialog, editCodeTask1, makeTaskAvailable, openTaskDoneDialog, setTaskResult, changeTab} from "../actions";

const mapStateToProps = (state) => {
    return {
        currentCodeTask1: state.Tasks.currentCodeTask1,
        currentTask: state.Tasks.currentTask,
        resultTask1: state.Tasks.resultTask1,
        currentTask1RibsTable: state.Tasks.currentTask1RibsTable,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editCodeTask1: (taskId) => dispatch(editCodeTask1(taskId)),
        makeTaskAvailable: (taskId) => dispatch(makeTaskAvailable(taskId)),
        setTaskResult: (result) => dispatch(setTaskResult(result)),
        openTaskDoneDialog: () => dispatch(openTaskDoneDialog()),
        closeTaskDoneDialog: () => dispatch(closeTaskDoneDialog()),
        changeTab: (value) => dispatch(changeTab(value)),
    }
};

const Task1Visible = connect(mapStateToProps, mapDispatchToProps)(Task1Component);

export default Task1Visible;