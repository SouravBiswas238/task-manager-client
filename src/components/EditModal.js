import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';




const EditModal = ({ editData, refetch, setShow }) => {
    const { _id, task } = editData;
    const { register, formState: { errors }, handleSubmit: handleEditSubmit, reset } = useForm();

    const editTask = (editedTask) => {

        const id = _id;
        console.log(editData);

        if (editedTask) {
            fetch(`https://shielded-mesa-63878.herokuapp.com/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(editedTask)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('SuccessFully update your Task');
                    refetch();

                })
        }
        else {
            toast.error("Failed to update")
        }
        setShow(false);
        reset();
    }

    return (
        <div>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-3xl">
                    <h3 className="font-bold text-lg"> Edit your task here</h3>
                    <label for="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleEditSubmit(editTask)} >
                        <div className="form-control lg:w-full">
                            <input
                                {...register("task", {
                                    required: {
                                        value: true,
                                        message: 'Add task'
                                    }
                                })}
                                type="text" placeholder={task}
                                className="input input-secondary w-full h-[60px] text-2xl" />
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.review?.message}</span>}
                            </label>

                        </div>

                        <button className='btn lg:w-1/2 btn-secondary text-white mx-2' type="submit">Update</button>


                    </form>


                </div>
            </div>
        </div >
    );
};

export default EditModal;