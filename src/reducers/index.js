import {combineReducers} from 'redux';
import {GO_ANOTHER_TASK, EDIT_CODE_TASK_1, EDIT_CODE_TASK_2, EDIT_CODE_TASK_3, EDIT_CODE_TASK_4, MAKE_TASK_AVAILABLE} from "../actions/index";
import initialCodeTask1 from '../consts/Task1/InitialCode';
import {
    CLOSE_CHOSEN_TASK_ERROR_DIALOG_STATUS,
    OPEN_CHOSEN_TASK_ERROR_DIALOG_STATUS
} from "../actions";

let tasksInitialState = {
    currentTask: 1,
    currentCodeTask1: initialCodeTask1,
    currentCodeTask2: '',
    currentCodeTask3: '',
    currentCodeTask4: '',
    isOpenedTask1: true,
    isOpenedTask2: false,
    isOpenedTask3: false,
    isOpenedTask4: false,
    isChosenTaskErrorDialogOpened: false,
};

function Tasks(state = tasksInitialState, action) {
   switch(action.type) {
       case GO_ANOTHER_TASK:
           if(action.payload === 1 && state.isOpenedTask1)
           {
               return Object.assign({}, state, {
                   currentTask: action.payload,
               });
           }
           else if(action.payload === 2 && state.isOpenedTask2)
           {
               return Object.assign({}, state, {
                   currentTask: action.payload,
               });
           }
           else if(action.payload === 3 && state.isOpenedTask3)
           {
               return Object.assign({}, state, {
                   currentTask: action.payload,
               });
           }
           else if(action.payload === 4 && state.isOpenedTask4)
           {
               return Object.assign({}, state, {
                   currentTask: action.payload,
               });
           }
           else
           {
               return Object.assign({}, state, {
                   isChosenTaskErrorDialogOpened: true,
               });
           }

       case EDIT_CODE_TASK_1:
           return Object.assign({}, state, {
               currentCodeTask1: action.payload,
           });

       case EDIT_CODE_TASK_2:
           return Object.assign({}, state, {
               currentCodeTask2: action.payload,
           });

       case EDIT_CODE_TASK_3:
           return Object.assign({}, state, {
               currentCodeTask3: action.payload,
           });

       case EDIT_CODE_TASK_4:
           return Object.assign({}, state, {
               currentCodeTask4: action.payload,
           });

       case MAKE_TASK_AVAILABLE:
           if(action.payload === 1)
           {
               return Object.assign({}, state, {
                   isOpenedTask1: true,
               });
           }
           else if(action.payload === 2)
           {
               return Object.assign({}, state, {
                   isOpenedTask2: true,
               });
           }
           else if(action.payload === 3)
           {
               return Object.assign({}, state, {
                   isOpenedTask3: true,
               });
           }
           else if(action.payload === 4)
           {
               return Object.assign({}, state, {
                   isOpenedTask4: true,
               });
           }

       case OPEN_CHOSEN_TASK_ERROR_DIALOG_STATUS:
           return Object.assign({}, state, {
               isChosenTaskErrorDialogOpened: action.payload,
           });

       case CLOSE_CHOSEN_TASK_ERROR_DIALOG_STATUS:
           return Object.assign({}, state, {
               isChosenTaskErrorDialogOpened: action.payload,
           });

       default:
           return state
    }
}

const storeApp = combineReducers({Tasks});
export default storeApp;