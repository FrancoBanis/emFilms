import './AuthPage.css'
import SignInForm from '../components/SignInForm'
import {Link} from 'react-router-dom'
function LoginPage () {
    return (
        <>
            <main className='auth-page'>
            <SignInForm/>
            <Link to="/register">
            <button className='btn-secundary'>Create an account</button>
            </Link>
            </main>
        </>
    )
}

export default LoginPage