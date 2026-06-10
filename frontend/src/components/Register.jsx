import { useState } from 'react';
import './AuthForm.css'
import { useNavigate } from 'react-router-dom'
function CreateAccountForm () {
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }); 

    return (
        <>
        <form className='auth-form' onSubmit={handleSubmit}>
            <h1 className='auth-title'>Create an account</h1>
            <label>Username</label>
            <input type='text' value={FormData.userName} onChange={(e) => setFormData({...FormData, userName: e.target.value})}></input>
            <label>Email</label>
            <input type='email' value={FormData.email} onChange={(e) => setFormData({...FormData, email: e.target.value})}></input>
            <label>Password</label>
            <input type='password' value={FormData.password} onChange={(e) => setFormData({...FormData, password: e.target.value})}></input>
            <label>Confirm Password</label>
            <input type='password' value={FormData.confirmPassword} onChange={(e) => setFormData({...FormData, confirmPassword: e.target.value})} ></input>
            <button className='btn-auth' type='submit'>Create</button>
        </form>
        </>
    )
}
export default CreateAccountForm