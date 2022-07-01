import React from 'react';

const CompleteData = ({ complete }) => {


    return (
        <tr className='hover border-y-2 border-slate-400'>
            <th>{complete.task}</th>

        </tr>

    );
};

export default CompleteData;