import { useState } from 'react';
import './AuthForm.css'
import { register } from '../services/userService'
import { useNavigate } from 'react-router-dom'
export function CreateAccountForm () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nickName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error,setError] = useState('')
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        try {
            const response = await register(formData)
            sessionStorage.setItem('jwt_token',response.data.token)
            navigate('/')
        } catch (err) {
            setError(err.response?.data?.message ?? 'Something went wrong')
        }
    }
    return (
        <>
        <form className='auth-form' onSubmit={handleSubmit}>
            <h1 className='auth-title'>Create an account</h1>
            <label>Nickname</label>
            <input name='nickName' type='text' value={formData.nickName} onChange={handleChange} />
            <label>Email</label>
            <input name='email' type='email' value={formData.email} onChange={handleChange} />
            <label>Password</label>
            <input name='password' type='password' value={formData.password} onChange={handleChange} />
            <label>Confirm Password</label>
            <input name='confirmPassword' type='password' value={formData.confirmPassword} onChange={handleChange} />
            <button className='btn-auth' type='submit'>Create</button>
        </form>
        </>
    )
};