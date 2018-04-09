import {connect} from 'react-redux';
import Task1Component from '../components/Task1Component';
import {editCode} from "../actions";

const mapStateToProps = (state) => {
    return {
        currentCodeTask1: state.Tasks.currentCodeTask1,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        editCode: (taskId) => dispatch(editCode(taskId)),
    }
};

const Task1Visible = connect(mapStateToProps, mapDispatchToProps)(Task1Component);

export default Task1Visible;