import React from 'react'
import logo from '../assets/logo.svg'

export const Select = () => {

    const handleSelect = (e) => {
        e.preventDefault();
        window.location.href = '/home';
    };
    const handleSignIn = (e) => {
        e.preventDefault();
        window.location.href = '/auth';
    };
    return (
        <>
            <div id='__next'>
                <div className='__variable_43de4e'>
                    <div className='h-[100vh] w-full flex justify-center align-center '>
                        <div className='text-sm flex w-96 flex-col justify-center h-full space-y-2'>
                            <img src={logo} alt="logo" className='w-40 mx-auto invert mb-0' />
                            <p className='py-2 text-center'>Select a business</p>
                            <button
                                onClick={handleSelect}
                                className='taimbro-primary py-2 px-4 bg-gray-200 w-40 mx-auto hover:bg-primary hover:text-white'><p className='font-body text-center'>Ascend</p></button>
                            <p className='text-center text-gray-400 text-xs'>or</p>
                            <button onClick={handleSignIn} className='text-xs font-body text-primary uppercase hover:opacity-50 block'>Sign into another account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
