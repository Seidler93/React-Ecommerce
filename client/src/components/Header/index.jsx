import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Auth from '../../utils/auth';
import Searchbar from './Searchbar';
import CartBtn from './CartBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faBars, faDumbbell, faCheck } from "@fortawesome/free-solid-svg-icons"
import HeaderDropDown from './HeaderDropDown';

export default function Header () {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-center">
      <div className="my-nav ps-2 me-3">
        <div>
          <Link className="logo-container" to={'/'}>
            <img className='logo' src={logo} alt="" />
          </Link>
        </div>
        <Searchbar/>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-light m-2" to="/profile">
                {Auth.getProfile().data.username}'s Profile
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-light m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
        <div className='d-flex'>
          <CartBtn/>
          <HeaderDropDown/>
       </div>
      </div>
    </nav>
  );
};
