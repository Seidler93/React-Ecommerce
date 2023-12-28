import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Auth from '../../utils/auth';
import Searchbar from './Searchbar';
import CartBtn from './CartBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faBars, faDumbbell, faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Header () {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <div className="logo-container" to="/">
            <img className='logo' src={logo} alt="" />
          </div>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-light m-2" to="/profile">
                {Auth.getProfile().data.username}'s Profile
              </Link>
              <button className="btn btn-light m-2" onClick={logout}>
                Logout
              </button>
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
       <Searchbar/>
       <CartBtn/>
      </div>
    </nav>
  );
};
