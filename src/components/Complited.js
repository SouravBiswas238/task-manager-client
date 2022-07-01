import React from 'react';
import { useQuery } from 'react-query';
import CompleteData from './CompleteData';


const Complited = ({ checkboxOpen }) => {

    const { data: myData, isLoading, error, refetch } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/tasks-complete`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    console.log(myData)
    if (isLoading) {
        refetch();
    }
    return (
        <div className='text-primary text-center '>
            <h2 className='text-center text-3xl my-2'>You complited this list ...</h2>
            <table class="table w-full text-center ">

                {
                    myData?.map(complete => <CompleteData complete={complete}></CompleteData>)
                }

            </table>

        </div>
    );
};

export default Complited;