import {combineReducers} from 'redux';
import initialCodeTask1 from '../consts/Task1/InitialCode';
import initialCodeTask2 from '../consts/Task2/InitialCode';
import initialCodeTask3 from '../consts/Task3/InitialCode';
import initialCodeTask4 from '../consts/Task4/InitialCode';

import task1InitialData from '../consts/Task1/InitialData';

import {
    GO_ANOTHER_TASK,
    EDIT_CODE_TASK_1,
    EDIT_CODE_TASK_2,
    EDIT_CODE_TASK_3,
    EDIT_CODE_TASK_4,
    MAKE_TASK_AVAILABLE,
    CLOSE_CHOSEN_TASK_ERROR_DIALOG,
    OPEN_CHOSEN_TASK_ERROR_DIALOG,
    SET_TASK_RESULT,
    OPEN_TASK_DONE_DIALOG,
    CLOSE_TASK_DONE_DIALOG, CHANGE_TAB,
    SHOW_TASK_DESCRIPTION_DIALOG,
    CLOSE_TASK_DESCRIPTION_DIALOG, CHANGE_TASK_SHOWN_STATUS,
} from "../actions";

let tasksInitialState = {
    currentTask: 1,
    currentCodeTask1: initialCodeTask1,
    currentCodeTask2: initialCodeTask2,
    currentCodeTask3: initialCodeTask3,
    currentCodeTask4: initialCodeTask4,
    isOpenedTask1: true,
    isOpenedTask2: true,
    isOpenedTask3: true,
    isOpenedTask4: true,
    isChosenTaskErrorDialogOpened: false,
    resultTask1: task1InitialData.ribsTable,
    resultTask2: '',
    resultTask3: '',
    resultTask4: '',
    isTaskDoneDialogOpened: false,
    isTaskDescDialogOpened: false,
    currentTask1RibsTable: "source",
    currentTask2RibsTable: "source",
    currentTask3RibsTable: "source",
    currentTask4RibsTable: "source",
    isTask1DescShown: false,
    isTask2DescShown: false,
    isTask3DescShown: false,
    isTask4DescShown: false,
};

function Tasks(state = tasksInitialState, action) {
   switch(action.type) {
       case GO_ANOTHER_TASK:
           if (action.payload === 1 && state.isOpenedTask1) {
               return Object.assign({}, state, {
                   currentTask: action.payload,
               });
           }
           else if (action.payload === 2 && state.isOpenedTask2) {
               return Object.assign({}, state, {
                   currentTask: action.payload,
               });
           }
           else if (action.payload === 3 && state.isOpenedTask3) {
               return Object.assign({}, state, {
                   currentTask: action.payload,
               });
           }
           else if (action.payload === 4 && state.isOpenedTask4) {
               return Object.assign({}, state, {
                   currentTask: action.payload,
               });
           }
           else {
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
           if (action.payload === 1) {
               return Object.assign({}, state, {
                   isOpenedTask1: true,
               });
           }
           else if (action.payload === 2) {
               return Object.assign({}, state, {
                   isOpenedTask2: true,
               });
           }
           else if (action.payload === 3) {
               return Object.assign({}, state, {
                   isOpenedTask3: true,
               });
           }
           else if (action.payload === 4) {
               return Object.assign({}, state, {
                   isOpenedTask4: true,
               });
           }

       case OPEN_CHOSEN_TASK_ERROR_DIALOG:
           return Object.assign({}, state, {
               isChosenTaskErrorDialogOpened: action.payload,
           });

       case CLOSE_CHOSEN_TASK_ERROR_DIALOG:
           return Object.assign({}, state, {
               isChosenTaskErrorDialogOpened: action.payload,
           });

       case SET_TASK_RESULT:
           if (state.currentTask === 1) {
               return Object.assign({}, state, {
                   resultTask1: action.payload,
               });
           }
           else if (state.currentTask === 2) {
               return Object.assign({}, state, {
                   resultTask2: action.payload,
               });
           }
           else if (state.currentTask === 3) {
               return Object.assign({}, state, {
                   resultTask3: action.payload,
               });
           }
           else if (state.currentTask === 4) {
               return Object.assign({}, state, {
                   resultTask4: action.payload,
               });
           }
           else {
               return state;
           }

       case OPEN_TASK_DONE_DIALOG:
           return Object.assign({}, state, {
               isTaskDoneDialogOpened: action.payload,
           });

       case CLOSE_TASK_DONE_DIALOG:
           return Object.assign({}, state, {
               isTaskDoneDialogOpened: action.payload,
           });

       case CHANGE_TAB:
           if (state.currentTask === 1) {
               return Object.assign({}, state, {
                   currentTask1RibsTable: action.payload,
               });
           }
           else if (state.currentTask === 2) {
               return Object.assign({}, state, {
                   currentTask2RibsTable: action.payload,
               });
           }
           else if (state.currentTask === 3) {
               return Object.assign({}, state, {
                   currentTask3RibsTable: action.payload,
               });
           }
           else if (state.currentTask === 4) {
               return Object.assign({}, state, {
                   currentTask4RibsTable: action.payload,
               });
           }
           else {
               return state;
           }

       case SHOW_TASK_DESCRIPTION_DIALOG:
           return Object.assign({}, state, {
               isTaskDescDialogOpened: true,
           });

       case CLOSE_TASK_DESCRIPTION_DIALOG:
           return Object.assign({}, state, {
               isTaskDescDialogOpened: false,
           });

       case CHANGE_TASK_SHOWN_STATUS:
           if (state.currentTask === 1)
           {
               return Object.assign({}, state, {
                   isTask1DescShown: true,
                   isTaskDescDialogOpened: true,
               });
           }
           else if (state.currentTask === 2)
           {
               return Object.assign({}, state, {
                   isTask2DescShown: true,
                   isTaskDescDialogOpened: true,
               });
           }
           else if (state.currentTask === 3)
           {
               return Object.assign({}, state, {
                   isTask3DescShown: true,
                   isTaskDescDialogOpened: true,
               });
           }
           else if (state.currentTask === 4)
           {
               return Object.assign({}, state, {
                   isTask4DescShown: true,
                   isTaskDescDialogOpened: true,
               });
           }
           else
           {
               return state;
           }

       default:
           return state
    }
}

const storeApp = combineReducers({Tasks});
export default storeApp;