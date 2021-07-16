import { ADD_TASK , Done_Task , Del_Task , Ref_Task, Edit_Task, Update_Task } from "../types/TodolistTypes"
import Swal from 'sweetalert2';

const initialState = {

    tasklist : [
        {id : 'task-1',taskname:'Code Sidebar',done:true},
        {id : 'task-2',taskname:'Code Landingpage FastFood',done:false},
        {id : 'task-3',taskname:'Code Function Add item',done:true},
        {id : 'task-4',taskname:'Details Product Page',done:false},
    ] , 

    taskedit : [

        {id : '-1',taskname:'Code Sidebar',done:false},

    ]

}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK : {
           console.log('todo',action.newTask);
           if(action.newTask.taskname.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Task Name is required !',
            })
               return {...state}
           }
           let tasklistUpdate = [...state.tasklist];
           //kiểm tra trùng
           let index = tasklistUpdate.findIndex(task => task.taskname === action.newTask.taskname);
           if(index !== -1)
           {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Task already exit !',
                })
               return {...state}
           }
           else{
                tasklistUpdate.push(action.newTask);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your plane have been saved',
                    showConfirmButton: true,
                    confirmButtonColor: '#0099ff'
                  })
           }
          

           state.tasklist = tasklistUpdate;
           return {...state};
        }
        
        case Done_Task : {
            // console.log('done',action);

            let listUpdate = [...state.tasklist];
            let index = listUpdate.findIndex(task => task.id === action.taskID);

            if(index !== -1) 
            {
                listUpdate[index].done = true;
            }

            return {...state,tasklist:listUpdate};
        }


        case Del_Task : {
            
            let tasklistUpdate = [...state.tasklist];

            tasklistUpdate = tasklistUpdate.filter(task => task.id !== action.taskID);


            return {...state,tasklist:tasklistUpdate};
        }

        case Ref_Task : {
            
             // console.log('done',action);

             let listUpdate = [...state.tasklist];
             let index = listUpdate.findIndex(task => task.id === action.taskID);
 
             if(index !== -1) 
             {
                 listUpdate[index].done = false;
             }
 
             return {...state,tasklist:listUpdate};
        }

        case Edit_Task : {
            
            return {...state,taskedit:action.task}

        }

        case Update_Task : {
            //Chỉnh Sửa lại taskname của taskedit
            state.taskedit = {...state.taskedit,taskname : action.taskname};
            let taskUpdate = [...state.tasklist];
            //Tìm trong taskList cập nhật lại taskedit người dùng update
            let index = taskUpdate.findIndex(task => task.id === state.taskedit.id)
            //
            console.log(index)
            if(index !== -1) 
            {
                taskUpdate[index] = state.taskedit;
            }

            state.tasklist = taskUpdate;
            state.taskedit = {id : '-1',taskname:'',done:false}
            return {...state}

        }

    default:
        return state
    }
}
