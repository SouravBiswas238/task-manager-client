import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    let signInError;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || gUser);



    if (token || user || gUser) {
        navigate(from, { replace: true });

    }
    if (error) {
        signInError = <p className='text-red-500'>{error.message}</p>

    }


    const onSubmit = data => {
        // console.log(data);

        signInWithEmailAndPassword(data.email, data.password);


    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <h2 className="text-center text-xl font-bold"><i> Please login to add some task!!</i></h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {

                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide valid email'
                                    }
                                })}
                                type="email" placeholder="Your email"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {

                                        value: 6,
                                        message: 'must be 6 charters'
                                    }
                                })}
                                type="password" placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">
                                    {errors.password.message}
                                </span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />



                    </form>



                    <div className='divider'>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline'>Continue with Google</button>

                    <p className='text-center'>New to flash electronic <Link to="/signup" className='text-primary'>Create new account</Link> </p>
                    <p className='text-center'>Forgate your password <Link to='/login' className='text-primary'>Reset password</Link> </p>





                </div>

            </div>

        </div>
    );
};

export default Login;