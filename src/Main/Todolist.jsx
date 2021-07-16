import React, { Component, Fragment } from 'react'
import Header from './Components/Header';
import Swal from 'sweetalert2';
import {connect} from 'react-redux';
import { AddTaskAction, DelTask, DoneTask , RefTask , EditTask , UpdateTask } from '../Redux/actions/TodolistAction';

class Todolist extends Component {

    state = {
        value : {
            "YourTask" : ''
        },
        errors : {
            "YourTask" : ''
        },
        disabled : true

       
    }

    // ChangeBinding = (event) => {
    //         let {name,value} = event.target;
    //         let ValueUpdate = {...this.state.value,[name] : value};
    //         let ErrorsUpdate = {...this.state.errors}
    //         if(value.trim() === '')
    //         {
    //             ErrorsUpdate[name] = name + ' ' + 'is required !';
    //         }
    //         else{
    //             ErrorsUpdate[name] = '';
    //         }

    //         this.setState({
    //             value : ValueUpdate,
    //             errors : ErrorsUpdate
    //         },() =>{
    //             console.log(this.state);
    //         })
    // }

    // HandleSubmit = (event) => {
    //     event.preventDefault();
    //     let {value,errors} = this.state;
    //     let valid = true;
    //     for(let key in value) {
    //         if(value[key] == '')
    //         {
                
    //             valid = false;
    //         }
    //     }
    //     for(let key in errors)
    //     {
    //         if(errors[key] !== '')
    //         {
    //             valid = false;
    //         }
    //     }

    //     if(!valid){
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Something went wrong!',
    //             footer: '<a href="">Why do I have this issue?</a>'
    //           })
    //         return
    //     }
    //     else{
    //         Swal.fire({
    //             position: 'top-center',
    //             icon: 'success',
    //             title: 'Your work has been saved',
    //             showConfirmButton: true,
    //           })
    //         return;
    //     }
    // }


    renderTaskTodo = () => {
        return this.props.tasklist.filter(task => !task.done).map((task,index) => {
            return (
                <div key={index} className="Component">
                <p id="txtHeading3" className="txtHeding3">{task.taskname}</p>
               <div className="process">
               <button onClick={ () =>

                    this.props.dispatch(DoneTask(task.id))

               } className="Icons"><i class="fas fa-check"></i></button>


                <button onClick={()=>
                    
                    this.setState({
                        disabled : false
                    }, () => {
                        this.props.dispatch(EditTask(task))
                    })
                    
                   }  className="Icons"><i class="far fa-edit"></i>
                    
                </button>



                <button onClick={() => {

                    this.props.dispatch(DelTask(task.id))


                }} className="Icons"><i class="far fa-trash-alt"></i></button>
               </div>
             </div>
            )
        })
    }

    renderTaskCompleted = () => {
        return this.props.tasklist.filter(tasks => tasks.done).map((tasks,index) => {
            return (
                <div key = {index} className="Component">
                                <p id="txtHeading3" className="txtHeding3">{tasks.taskname}</p>
                                <div className="process">
                                   <button className="Icons green"><i class="fas fa-check"></i></button>
                                    <button onClick = {
                                        () => this.props.dispatch(RefTask(tasks.id))
                                    } className="Icons"><i class="fa fa-refresh" aria-hidden="true"></i></button>
                                    <button onClick = {() => {

                                        this.props.dispatch(DelTask(tasks.id))

                                    }} className="Icons"><i class="far fa-trash-alt"></i></button>
                                </div>
                </div>
            )
        })
    }


    // ComponentWillReceiveProps(newProps) :
    // ====>>>> Nhận vào 1 Props mới và được thực thi trước hàm render
    // componentWillReceiveProps(newProps) 
    // {
    //     this.setState({
    //         taskname : newProps.taskedit.taskname
    //     })
    // }


    // Life Cycle tính không truy xuát từ con trở this
    // static getDerivedStateToProps( newProps, currentState)
    // {
    //     //NewProps : là props mới , props cũ là this.props(không truy xuất được con trỏ this)
    //     //currentState : tương đương với this.state hiện tại 
    //     //hoặc trả về state mới : 
    //     let newState  = {...currentState,taskname : newProps.taskedit.taskname}
    //     return newState;
    //     return null;
    // }



    render() {
        return (
           <div>
                <Header></Header>

                {/* Header Component */}

                {/* ToDoList Component */}
                <div className="Block flex">
                    <div className="content">
                            <p className="txtHeading2">Task To Do</p>
                            <div className="content-tasklist">
                                    {this.renderTaskTodo()}
                            </div>
                            <p className="txtHeading2">Task Completed</p>
                            <div className="content-tasklist">
                                {this.renderTaskCompleted()}
                            </div>
                    </div>
                    {/* Left Component */}
                    <div className="list">
                           <form  action="">
                               <p className="txtHeading3">What's The Plant For To Day ?</p>
                               <div className="list-data">
                               {/* Mỗi lần người dụng nhập liệu vào 
                                    lấy value và thay đổi trực tiếp trên state

                                
                               */}
                                <input value={this.state.taskname} onChange={(e) => {
                                    this.setState({
                                        taskname:e.target.value
                                    },() => {
                                        console.log(this.state);
                                    })

                                }} name = "YourTask" className="YourTask" type="text" placeholder=" "/>
                                <label htmlFor="">Your Task</label>
                               
                               </div>
                               <div className="btn_process">
                                   <button onClick={(event) => {
                                        //lấy thông tin người dùng 
                                        event.preventDefault();
                                        let{taskname} = this.state;

                                        //Tạo ra 1 task object : 

                                        let newTask = {
                                            id : Date.now(), //09111999
                                            taskname : taskname,
                                            done : false
                                        }
                                        console.log(newTask);

                                        this.props.dispatch(AddTaskAction(newTask))

                                   }} type="submit" className="btn primary"> <i class="fa fa-plus" aria-hidden="true"></i> Add Task </button>

                                   {this.state.disabled ? <button disabled onClick={(event) => {
                                    event.preventDefault();
                                    this.props.dispatch(UpdateTask(this.state.taskname))
                                   }} className="btn second"> <i class="fas fa-edit "></i> Update Task </button> :

                                   <button onClick={(event) => {
                                    event.preventDefault();
                                    let {taskname} = this.state;
                                    this.setState({
                                        disabled : true,
                                        taskname : ''
                                    }, () => {this.props.dispatch(UpdateTask(taskname))})
                                   }} className="btn second"> <i class="fas fa-edit "></i> Update Task </button>
                                   
                                   }
                                   
                               </div>
                               {/* <p className="txtNoti" htmlFor="">{this.state.errors.YourTask}</p> */}
                           </form>
                    </div>
                </div>
           </div>
        )
    }

    //LifeCycle componentDidUpdate chạy sau khi hàm render thực hiện
    //Trả về props và state cũ của component trức khi render

    componentDidUpdate(preProps , preState) 
    {   
        if(preProps.taskedit.id !== this.props.taskedit.id)
        {
            this.setState({
                taskname : this.props.taskedit.taskname
            })
        }


        
    }



}


const mapStateToProps = state => {
    return {
        tasklist : state.TodolistReducer.tasklist,
        taskedit : state.TodolistReducer.taskedit
    }
}




export default connect(mapStateToProps)(Todolist)