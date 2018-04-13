export const GO_ANOTHER_TASK = "GO_ANOTHER_TASK";
export const EDIT_CODE_TASK_1 = "EDIT_CODE_TASK_1";
export const EDIT_CODE_TASK_2 = "EDIT_CODE_TASK_2";
export const EDIT_CODE_TASK_3 = "EDIT_CODE_TASK_3";
export const EDIT_CODE_TASK_4 = "EDIT_CODE_TASK_4";
export const MAKE_TASK_AVAILABLE = "MAKE_TASK_AVAILABLE";
export const SET_TASK_RESULT = "SET_TASK_RESULT";
export const OPEN_CHOSEN_TASK_ERROR_DIALOG_STATUS = "OPEN_CHOSEN_TASK_ERROR_DIALOG_STATUS";
export const CLOSE_CHOSEN_TASK_ERROR_DIALOG_STATUS = "CLOSE_CHOSEN_TASK_ERROR_DIALOG_STATUS";

export function openChosenTaskErrorDialogStatus()
{
    return {
        type: OPEN_CHOSEN_TASK_ERROR_DIALOG_STATUS,
        payload: true,
    }
}

export function closeChosenTaskErrorDialogStatus()
{
    return {
        type: CLOSE_CHOSEN_TASK_ERROR_DIALOG_STATUS,
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