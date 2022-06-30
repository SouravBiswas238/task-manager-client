import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from './Loading';



const SingleTask = ({ taskD, handelTaskEdit }) => {

    const [deleteData, setDeleteData] = useState({});
    const [checkboxOpen, setCheckboxOpen] = useState({});



    const status = (event) => {
        setCheckboxOpen(event);

    }


    const handelTaskDelete = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDeleteData(data);
            });
    }

    if (deleteData.deletedCount === 1) {
        return <Loading></Loading>
    }
    return (

        <tr class="hover">
            <th><button >
                <input onClick={() => status(taskD)} className='mx-3 px-2 checkbox checkbox-secondary font-xl' type="checkbox"
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