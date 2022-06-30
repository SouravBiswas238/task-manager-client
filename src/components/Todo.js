import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';



const Todo = () => {

    const { data, isLoading, error, refetch } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/tasks`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    console.log(data);

    return (
        <div className='text-center my-5'>

            <div class="tooltip hover:tooltip-open my-5" data-tip="please login to add some task!!">
                <Link className='btn btn-primary' to="/addtask">Add Task +</Link>
            </div>
            <div>
                todo task show here.........

                <div className='grid grid-cols-3 gap-4'>

                    <div class="card  bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">My today task</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card  bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">My today task</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card  bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">My today task</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card  bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">My today task</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Todo;