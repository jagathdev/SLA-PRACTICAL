import React, { useState } from 'react'

const Signup = () => {
    const [data, setData] = useState({ name: "", mobile: "", email: "", password: "" })

    const getFromData = (e) => {
        e.preventDefault();
        setData(e.target.value)
        if (data.length > 6) {
        }

    };

    const getInputData = (e) => {
        setData(e.target.value)
        console.log(data)
    };




    return (
        <>
            <form onSubmit={getFromData}>
                <label>Name :</label>
                <input type="text" placeholder='enter Name' name='name' />
                <label>Mobile :</label>
                <input type="text" placeholder='enter Mobile Number' name='mobile' />
                <select name='role'>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <label>Email :</label>
                <input type="email" placeholder='Enter Email' name='email' />
                <label>Password :</label>
                <input onChange={getInputData} type="password" placeholder='Enter password' name='password' />
                <input type="submit" value="SignUp" />
            </form>
        </>
    )

}


export default Signup;
