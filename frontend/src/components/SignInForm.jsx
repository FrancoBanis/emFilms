import './AuthForm.css'
function SignInForm () {
    return (
    <form className='auth-form'>
    <h1 className='auth-title'>Sign in</h1>
        <label>Username</label>
        <input type='text'></input>
        <label>Password</label>
        <input type='password'></input>
        <button className="btn-auth" type='submit'>Log in</button>
    </form>    
    )
}
export default SignInForm