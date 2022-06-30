import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Header = () => {

    const [user] = useAuthState(auth);
    const userName = user?.displayName?.charAt(0);

    const logOut = () => {
        signOut(auth);
    }


    return (
        <div class="navbar bg-secondary ">


            <div class="flex-1 text-white font-bold">

                <div class="btn btn-ghost btn-circle avatar bg-primary">
                    <div className='w-10 rounded-full '>

                        {
                            user ? (user?.photoURL ? <img src={user?.photoURL} alt='user' /> : <span class="text-3xl">{userName}</span>) : <FontAwesomeIcon icon={faUserLarge} size='2x' />
                        }
                    </div>
                </div>
                <Link className='p-2 mx-2 hover:bg-slate-400 rounded' to='/todo'>To-Do</Link>
                <Link className='p-2 mx-2 hover:bg-slate-400 rounded' to='/complete'>Completed</Link>
                <Link className='p-2 mx-2 hover:bg-slate-400 rounded' to='/favourite'>Favourite</Link>
                <Link className='p-2 mx-2 hover:bg-slate-400 rounded' to='/calender'> Calendar</Link>
            </div>

            <div class="flex-none gap-2">

                <Link className='btn btn-primary' to="/addtask">Add Task +</Link>

                <ul>

                    < li > {
                        user ?
                            <button onClick={logOut} className='btn btn-primary'>Sign Out</button> :
                            <Link className='btn btn-primary' to="/login">Login</Link>
                    }</li>
                </ul>

            </div>
        </div >
    );
};

export default Header;