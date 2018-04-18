import {connect} from 'react-redux';
import {
    changeTab,
    closeTaskDoneDialog, editCodeTask1,
    editCodeTask3,
    makeTaskAvailable,
    openTaskDoneDialog,
    setTaskResult
} from "../actions";
import Task3Component from "../components/Task3Component";

const mapStateToProps = (state) => {
    return {
        currentCodeTask3: state.Tasks.currentCodeTask3,
        currentTask: state.Tasks.currentTask,
        resultTask3: state.Tasks.resultTask3,
        currentTask1RibsTable: state.Tasks.currentTask1RibsTable,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        editCodeTask3: (taskId) => dispatch(editCodeTask3(taskId)),
        editCodeTask1: (taskId) => dispatch(editCodeTask1(taskId)),
        makeTaskAvailable: (taskId) => dispatch(makeTaskAvailable(taskId)),
        setTaskResult: (result) => dispatch(setTaskResult(result)),
        openTaskDoneDialog: () => dispatch(openTaskDoneDialog()),
        closeTaskDoneDialog: () => dispatch(closeTaskDoneDialog()),
        changeTab: (value) => dispatch(changeTab(value)),
    }
};

const Task3Visible = connect(mapStateToProps, mapDispatchToProps)(Task3Component);

export default Task3Visible;