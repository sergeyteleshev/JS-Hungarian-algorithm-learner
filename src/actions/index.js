export const TEST_ACTION = "TEST_ACTION";
export const GO_ANOTHER_TASK = "GO_ANOTHER_TASK";
export const EDIT_CODE = "EDIT_CODE";

export function testAction () {
    return {
        type:TEST_ACTION,
    }
}

export function goAnotherTask(taskId)
{
    return {
        type: GO_ANOTHER_TASK,
        payload: taskId,
    }
}

export function editCode(newValue)
{
    return {
        type: EDIT_CODE,
        payload: newValue,
    }
}
