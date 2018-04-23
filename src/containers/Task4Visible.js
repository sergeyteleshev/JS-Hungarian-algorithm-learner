import {connect} from 'react-redux';
import {
    changeCompiledCodeDialogStatus,
    changeTab, closeTaskDescriptionDialog,
    closeTaskDoneDialog,
    editCodeTask4,
    makeTaskAvailable,
    openTaskDoneDialog,
    setTaskResult, showTaskDescriptionDialog
} from "../actions";
import Task4Component from "../components/Task4Component";

const mapStateToProps = (state) => {
    return {
        currentCodeTask4: state.Tasks.currentCodeTask4,
        currentTask: state.Tasks.currentTask,
        resultTask4: state.Tasks.resultTask4,
        currentTask4RibsTable: state.Tasks.currentTask4RibsTable,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        editCodeTask4: (taskId) => dispatch(editCodeTask4(taskId)),
        makeTaskAvailable: (taskId) => dispatch(makeTaskAvailable(taskId)),
        setTaskResult: (result) => dispatch(setTaskResult(result)),
        openTaskDoneDialog: () => dispatch(openTaskDoneDialog()),
        closeTaskDoneDialog: () => dispatch(closeTaskDoneDialog()),
        changeTab: (value) => dispatch(changeTab(value)),
        showTaskDescriptionDialog: () => dispatch(showTaskDescriptionDialog()),
        closeTaskDescriptionDialog: () => dispatch(closeTaskDescriptionDialog()),
        changeCompiledCodeDialogStatus: () => dispatch(changeCompiledCodeDialogStatus()),
    }
};

const Task4Visible = connect(mapStateToProps, mapDispatchToProps)(Task4Component);

export default Task4Visible;