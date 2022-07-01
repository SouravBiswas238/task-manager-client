import React, { useState } from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from './Loading';
import { toast } from 'react-toastify';



const SingleTask = ({ taskD, handelTaskEdit, refetch }) => {

    const [deleteData, setDeleteData] = useState({});

    const handelTaskDelete = (id) => {
        fetch(`https://shielded-mesa-63878.herokuapp.com/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDeleteData(data);
                toast.success('Successfully deleted')

            });
    }
    const handelCompleted = (id) => {
        fetch(`https://shielded-mesa-63878.herokuapp.com/tasks-complete/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDeleteData(data);
                toast.success('Completed')

            });

    }

    if (deleteData.deletedCount === 1) {
        refetch()
        return <Loading></Loading>
    }
    return (

        <tr className="hover">
            <th><button onClick={() => handelCompleted(taskD._id)} >
                <input className='mx-3 px-2 checkbox checkbox-secondary font-xl' type="checkbox"
                />
            </button> </th>
            <td> {taskD.task}   </td>
            <td>
                <label for="edit-modal" className='btn btn-primary btn-sm' onClick={() => handelTaskEdit(taskD._id)}>           <FontAwesomeIcon icon={faPencil} /></label>
            </td>
            <td><button onClick={() => handelTaskDelete(taskD._id)} className='btn btn-primary btn-sm'>
                delete</button></td>

        </tr>



    );
};

export default SingleTask;