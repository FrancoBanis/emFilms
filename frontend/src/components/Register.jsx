import { useState } from 'react';
import './AuthForm.css'
import { useNavigate } from 'react-router-dom'
export function CreateAccountForm () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }); 
    return (
        <>
        <form className='auth-form' disabled>
            <h1 className='auth-title'>Create an account</h1>
            <label>Username</label>
            <input type='text' value={formData.userName} onChange={(e) => setFormData({...formData, userName: e.target.value})}></input>
            <label>Email</label>
            <input type='email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}></input>
            <label>Password</label>
            <input type='password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
            <label>Confirm Password</label>
            <input type='password' value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} ></input>
            <button className='btn-auth' type='submit'>Create</button>
        </form>
        </>
    )
};