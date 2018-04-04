import {connect} from 'react-redux';
import Task1Component from '../components/Task1Component';
import {testAction} from "../actions/index";

const mapStateToProps = (state) => {
    return {
        test:state.Hello.test
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        testAction:()=>dispatch(testAction())
    }
};

const Task1Visible = connect(mapStateToProps, mapDispatchToProps)(Task1Component);

export default Task1Visible;