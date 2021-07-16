import { ADD_TASK , Done_Task , Del_Task , Ref_Task , Edit_Task , Update_Task } from "../types/TodolistTypes";

export const AddTaskAction = (newTask) => ({
    type: ADD_TASK,
    newTask
})

export const DoneTask = (taskID) => ({

    type : Done_Task,
    taskID

}) 

export const DelTask = (taskID) => ({
    type : Del_Task,
    taskID
})

export const RefTask = (taskID) => ({
    type : Ref_Task,
    taskID
})

export const EditTask = (task) => ({
    type : Edit_Task,
    task
})

export const UpdateTask = (taskname) => ({
    type : Update_Task,
    taskname
})
