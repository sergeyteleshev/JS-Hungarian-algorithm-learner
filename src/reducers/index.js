import {combineReducers} from 'redux';
import {TEST_ACTION, GO_ANOTHER_TASK} from "../actions/index";

let tasksInitialState = {
    currentTask: 1,
    isOpenedTask1: true,
    isOpenedTask2: false,
    isOpenedTask3: false,
    isOpenedTask4: false,
};

function Tasks(state = tasksInitialState, action) {
   switch(action.type) {
       case TEST_ACTION:
           let content = state.test === 'Successful'? 'Hello World':'Successful';
           return {test:content};

       case GO_ANOTHER_TASK:
           return Object.assign({}, state, {
                currentTask: action.payload,
           });

       default:
           return state
    }
}

const storeApp = combineReducers({Tasks});
export default storeApp;