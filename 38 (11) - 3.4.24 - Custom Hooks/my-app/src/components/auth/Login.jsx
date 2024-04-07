import React, { useState } from 'react';
import UserAuth from '../../models/UserAuth';

const Login = () => {
    const [user, setUser] = useState(new UserAuth());
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        // 1. Create a new Class Instance and set all the current values (from the state)
        const userAuth = new UserAuth(user.email, user.password);

        // 2. Update the single field that had changed
        userAuth.updateField(e.target.name, e.target.value);

        // 3. Use the state setter to update the field (REMEMBER, this is asynchronous)
        setUser(userAuth);

        console.log(userAuth);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if permitted to login (fake = simulation)
        if (user.email === 'me@tomersagi.com' && user.password === '123')
            setStatus(true);
        else   
            setStatus(false);
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

            { status && (

                <div>
                    { status === true && 'SUCCESS' }
                    { status === false && 'FAIL' }
                </div>

            )}
        </div>
    )
}

export default Login
