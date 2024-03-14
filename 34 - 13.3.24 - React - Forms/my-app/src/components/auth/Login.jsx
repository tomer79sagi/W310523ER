import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if permitted to login (fake = simulation)
        if (user.email === 'me@tomersagi.com' && user.password === '123')
            setStatus('SUCCESS');
        else   
            setStatus('FAIL');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='email'>Email</label>
                            </td>
                            <td>
                                <input type='email' id='email' name='email' onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='password'>Password</label>
                            </td>
                            <td>
                                <input type='password' id='password' name='password' onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button>Login</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <div>
                { status }
            </div>
        </div>
    )
}

export default Login
