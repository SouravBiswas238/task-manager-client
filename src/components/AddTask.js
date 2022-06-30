import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const AddTask = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const addTask = (data) => {


        const task = data.task;
        const name = user.displayName;
        const email = user.email;

        const taskData = { task, email, name }
        console.log(taskData);

        if (taskData) {
            fetch('http://localhost:5000/task', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(taskData)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('SuccessFully added your Task')

                })
        }
        else {
            toast.error("Please insert a valid string")
        }

        reset();

    }

    return (
        <div className='m-5'>
            <h3 className='text-3xl m-3'>Here you can add your daily task......</h3>


            <form onSubmit={handleSubmit(addTask)} >


                <div className="form-control lg:w-96">
                    <input
                        {...register("task", {
                            required: {
                                value: true,
                                message: 'Add task'
                            }

                        })}
                        type="text" placeholder="Add a task"
                        className="input input-secondary w-full max-w-xs" />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.review?.message}</span>}
                    </label>

                </div>

                <input className='btn lg:w-1/2  text-white' type="submit" value='Add task' />

            </form>
        </div>
    );
};

export default AddTask;