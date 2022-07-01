import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import SingleTask from './SingleTask';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';
import EditModal from './EditModal';
import Complited from './Complited';
import WritingLotti from './jsonLotti/WritingLotti';


const Todo = () => {
    const [editData, setEditData] = useState({});
    const [checkboxOpen, setCheckboxOpen] = useState({});
    const a = ["Banana",];


    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data, isLoading, error, refetch } = useQuery('repoData', () =>
        fetch(`https://shielded-mesa-63878.herokuapp.com/tasks`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    const [user] = useAuthState(auth);

    const addTask = (data) => {
        const task = data?.task;
        const name = user?.displayName;
        const email = user?.email;

        const taskData = { task, email, name }

        if (taskData) {
            fetch('https://shielded-mesa-63878.herokuapp.com/task', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(taskData)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('SuccessFully added your Task');
                    refetch()
                })
        }
        else {
            toast.error("Please insert a valid string")
        }

        reset();

    }
    const handelTaskEdit = (id) => {
        fetch(`https://shielded-mesa-63878.herokuapp.com/tasks/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setEditData(data);
            });
    }


    const status = (event) => {
        setCheckboxOpen(event);

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center  bg-neutral  py-5'>

            <div class="tooltip hover:tooltip-open my-5" data-tip="please login to add some task!!">
                <Link className='btn btn-primary' to="/addtask">Add Task +</Link>
            </div>


            <div className='mx-3 lg:px-7'>
                <div class="card  text-dark">
                    <h2 className='text-2xl m-2 text-white'>My today list</h2>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Task Deskription</th>
                                    <th>edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map(taskD => <SingleTask key={taskD._id} status={status} handelTaskEdit={handelTaskEdit} taskD={taskD}>
                                    </SingleTask>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='content-center text-center my-5'>
                        <form onSubmit={handleSubmit(addTask)} >
                            <div className="form-control lg:w-full">
                                <input
                                    {...register("task", {
                                        required: {
                                            value: true,
                                            message: 'Add task'
                                        }
                                    })}
                                    type="text" placeholder="Add a task"
                                    className="input input-secondary w-full h-[60px] text-2xl" />
                                <label className="label">
                                    {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.review?.message}</span>}
                                </label>

                            </div>
                            <input className='btn lg:w-1/2 btn-secondary text-white' type="submit" value='Add task' />
                        </form>
                    </div>
                    {
                        editData && <EditModal editData={editData} refetch={refetch}></EditModal>

                    }

                </div>

                {
                    <Complited checkboxOpen={checkboxOpen}></Complited>
                }
                <WritingLotti></WritingLotti>

            </div>


        </div>
    );
};

export default Todo;