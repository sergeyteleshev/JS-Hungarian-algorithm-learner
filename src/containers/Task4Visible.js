import {connect} from 'react-redux';
import {
    changeTab,
    closeTaskDoneDialog, editCodeTask1,
    editCodeTask4,
    makeTaskAvailable,
    openTaskDoneDialog,
    setTaskResult
} from "../actions";
import Task4Component from "../components/Task4Component";

const mapStateToProps = (state) => {
    return {
        currentCodeTask4: state.Tasks.currentCodeTask4,
        currentTask: state.Tasks.currentTask,
        resultTask4: state.Tasks.resultTask4,
        currentTask1RibsTable: state.Tasks.currentTask1RibsTable,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        editCodeTask4: (taskId) => dispatch(editCodeTask4(taskId)),
        editCodeTask1: (taskId) => dispatch(editCodeTask1(taskId)),
        makeTaskAvailable: (taskId) => dispatch(makeTaskAvailable(taskId)),
        setTaskResult: (result) => dispatch(setTaskResult(result)),
        openTaskDoneDialog: () => dispatch(openTaskDoneDialog()),
        closeTaskDoneDialog: () => dispatch(closeTaskDoneDialog()),
        changeTab: (value) => dispatch(changeTab(value)),
    }
};

const Task4Visible = connect(mapStateToProps, mapDispatchToProps)(Task4Component);

export default Task4Visible;