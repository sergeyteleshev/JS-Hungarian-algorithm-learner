export const GO_ANOTHER_TASK = "GO_ANOTHER_TASK";
export const EDIT_CODE_TASK_1 = "EDIT_CODE_TASK_1";
export const EDIT_CODE_TASK_2 = "EDIT_CODE_TASK_2";
export const EDIT_CODE_TASK_3 = "EDIT_CODE_TASK_3";
export const EDIT_CODE_TASK_4 = "EDIT_CODE_TASK_4";
export const MAKE_TASK_AVAILABLE = "MAKE_TASK_AVAILABLE";
export const SET_TASK_RESULT = "SET_TASK_RESULT";
export const OPEN_CHOSEN_TASK_ERROR_DIALOG = "OPEN_CHOSEN_TASK_ERROR_DIALOG";
export const CLOSE_CHOSEN_TASK_ERROR_DIALOG = "CLOSE_CHOSEN_TASK_ERROR_DIALOG";
export const OPEN_TASK_DONE_DIALOG = "OPEN_TASK_DONE_DIALOG";
export const CLOSE_TASK_DONE_DIALOG = "CLOSE_TASK_DONE_DIALOG";
export const CHANGE_TAB = "CHANGE_TAB";
export const SHOW_TASK_DESCRIPTION_DIALOG = "SHOW_TASK_DESCRIPTION_DIALOG";
export const CLOSE_TASK_DESCRIPTION_DIALOG = "CLOSE_TASK_DESCRIPTION_DIALOG";

export function openChosenTaskErrorDialog()
{
    return {
        type: OPEN_CHOSEN_TASK_ERROR_DIALOG,
        payload: true,
    }
}

export function closeChosenTaskErrorDialog()
{
    return {
        type: CLOSE_CHOSEN_TASK_ERROR_DIALOG,
        payload: false,
    }
}

export function openTaskDoneDialog()
{
    return {
        type: OPEN_TASK_DONE_DIALOG,
        payload: true,
    }
}

export function changeTab(value) {
    return {
        type: CHANGE_TAB,
        payload: value,
    }
}

export function closeTaskDoneDialog()
{
    return {
        type: CLOSE_TASK_DONE_DIALOG,
        payload: false,
    }
}


export function goAnotherTask(taskId)
{
    return {
        type: GO_ANOTHER_TASK,
        payload: taskId,
    }
}

export function setTaskResult(result) {
    return {
        type: SET_TASK_RESULT,
        payload: result,
    }
}

export function makeTaskAvailable(taskId) {
    return {
        type: MAKE_TASK_AVAILABLE,
        payload: taskId,
    }
}

export function editCodeTask1(newValue)
{
    return {
        type: EDIT_CODE_TASK_1,
        payload: newValue,
    }
}

export function editCodeTask2(newValue)
{
    return {
        type: EDIT_CODE_TASK_2,
        payload: newValue,
    }
}

export function editCodeTask3(newValue)
{
    return {
        type: EDIT_CODE_TASK_3,
        payload: newValue,
    }
}

export function editCodeTask4(newValue)
{
    return {
        type: EDIT_CODE_TASK_4,
        payload: newValue,
    }
}

export function showTaskDescriptionDialog()
{
    return {
        type: SHOW_TASK_DESCRIPTION_DIALOG,
    }
}

export function closeTaskDescriptionDialog()
{
    return {
        type: CLOSE_TASK_DESCRIPTION_DIALOG,
    }
}