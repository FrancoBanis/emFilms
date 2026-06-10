import './Header.css'
import SearchFormHeader from './SearchFormHeader'
import {Link} from 'react-router-dom'
function Header(){ 
    return (<header className="main-header">
    <h1 className="header-title">Em<span className="highlight">Films</span></h1>
      <SearchFormHeader/>
      <button className='btn-primary'> WATCH LATER</button>
      <Link to="/login">
        <button className='btn-red'> SIGN IN</button>
      </Link>
</header>
)}
export default Header