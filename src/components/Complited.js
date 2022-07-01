import React from 'react';
import { useQuery } from 'react-query';
import CompleteData from './CompleteData';


const Complited = ({ checkboxOpen }) => {

    const { data: myData, isLoading, error, refetch } = useQuery('repoData', () =>
        fetch(`https://shielded-mesa-63878.herokuapp.com/tasks-complete`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        refetch();
    }
    return (
        <div className='text-primary text-center '>
            <h2 className='text-center text-3xl my-2'>You complited this list ...</h2>
            <table className="table w-full text-center ">
                <tbody>

                    {
                        myData?.map(complete => <CompleteData complete={complete}></CompleteData>)
                    }
                </tbody>

            </table>

        </div>
    );
};

export default Complited;