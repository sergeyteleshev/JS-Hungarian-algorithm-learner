export const TEST_ACTION = "TEST_ACTION";
export const GO_ANOTHER_TASK = "GO_ANOTHER_TASK";

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