import {connect} from 'react-redux';
import {editCodeTask2} from "../actions";
import Task2Component from "../components/Task2Component";

const mapStateToProps = (state) => {
    return {
        currentCodeTask2: state.Tasks.currentCodeTask2,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        editCodeTask2: (taskId) => dispatch(editCodeTask2(taskId)),
    }
};

const Task2Visible = connect(mapStateToProps, mapDispatchToProps)(Task2Component);

export default Task2Visible;