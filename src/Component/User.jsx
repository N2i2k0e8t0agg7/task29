import React from 'react'
import useFetch from '../hooks/useFetch'

const Users = () => {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");
    if (loading) {
        return (
            <div className='min-h-screen bg-black flex justify-center items-center text-white text-2xl'>
                Loading...
            </div>
        );
    }
    if (error) {
        return (
            <h1 className='min-h-screen bg-black flex justify-center items-center text-white text-2xl'>
                {error}
            </h1>
        );
    }

    return (
        <div className='min-h-screen bg-black text-white p-10'>
            <h1 className='text-white text-2xl font-bold text-center pb-5'>
                Users Data
            </h1>
            <div className='grid grid-cols-3 gap-8'>
                {data.map((user) => (
                    <div key={user.id} className='bg-zinc-900 p-6 rounded-2xl border border-zinc-700 hover:scale-105 transition-all duration-300'>
                        <h2 className='text-2xl font-bold text-cyan-400'>
                            {user.name}
                        </h2>
                        <p className='mt-3'>
                            <span className='font-bold'>Username:</span>{" "}{user.username}
                        </p>
                        <p className='mt-2'>
                            <span className='font-bold'>Email:</span>{" "}{user.email}
                        </p>
                        <p className='mt-2'>
                            <span className='font-bold'>City:</span>{" "}{user.address.city}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users