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
    const menuItem = <>

        <Link className='p-2 mx-2 hover:bg-slate-400 rounded' to='/todo'>To-Do</Link>
        <Link className='p-2 mx-2 hover:bg-slate-400 rounded' to='/complete'>Complete</Link>
        <Link className='p-2 mx-2 hover:bg-slate-400 rounded' to='/favourite'>Favourite</Link>
        <Link className='p-2 mx-2 hover:bg-slate-400 rounded' to='/calender'> Calendar</Link>
    </>


    return (
        <div class="navbar bg-secondary text-white ">

            <div class="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>

            <div className="lg:flex-1 w-11/12   dropdown  bg-secondary lg:hidden ">
                <label tabIndex="1" class="btn btn-circle swap swap-rotate absolute  right-[-24px] top-[-28px] hover:z-51">
                    <input type="checkbox" />
                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
                <ul tabIndex="1" className=" bg-secondary menu menu-compact dropdown-content w-11/12 h-[300px] text-center">
                    {menuItem}
                </ul>
            </div >

            <div class="lg:flex hidden absolute right-3  gap-2">
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