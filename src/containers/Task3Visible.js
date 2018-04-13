import {connect} from 'react-redux';
import {editCodeTask3} from "../actions";
import Task3Component from "../components/Task3Component";

const mapStateToProps = (state) => {
    return {
        currentCodeTask3: state.Tasks.currentCodeTask3,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        editCodeTask3: (taskId) => dispatch(editCodeTask3(taskId)),
    }
};

const Task3Visible = connect(mapStateToProps, mapDispatchToProps)(Task3Component);

export default Task3Visible;