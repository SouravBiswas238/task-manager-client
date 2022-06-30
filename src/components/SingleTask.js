import React from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleTask = ({ taskD }) => {
    const handelTaskDelete = (id) => {

        console.log(id);

    }
    const handelTaskEdit = (id) => {

        console.log(id);

    }

    return (

        <tr class="hover">
            <th> <input className='mx-3 px-2 checkbox checkbox-secondary font-xl' type="checkbox" checked="checked" /> </th>
            <td> {taskD.task}   </td>
            <td><button onClick={() => handelTaskEdit(taskD._id)}>
                <FontAwesomeIcon icon={faPencil} />
            </button>   </td>
            <td><button onClick={() => handelTaskDelete(taskD._id)} className='btn btn-primary btn-sm'>
                delete</button></td>
        </tr>



    );
};

export default SingleTask;