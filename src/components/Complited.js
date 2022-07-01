import React from 'react';


const Complited = ({ checkboxOpen }) => {


    return (
        <div className='text-primary'>
            <h2>You complited this list ...</h2>
            <table class="table w-full">

                <tbody>
                    <tr >{

                        checkboxOpen?.task && <th>{checkboxOpen?.task}</th>
                    }

                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Complited;