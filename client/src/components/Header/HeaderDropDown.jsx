import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Auth from '../../utils/auth';
import Searchbar from './Searchbar';
import CartBtn from './CartBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faBars, faDumbbell, faCheck } from "@fortawesome/free-solid-svg-icons"
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HeaderDropDown () {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon icon={faBars} />        
      </Dropdown.Toggle>

      <Dropdown.Menu>
          {Auth.loggedIn() ? (
            <>
              <Link className='dropdown-menu-item dropdown-item' to="/profile">
                Profile
              </Link>
              <Dropdown.Item onClick={logout}>
                Logout
              </Dropdown.Item>
            </>
          ) : (
            <>
              <Link className="dropdown-menu-item dropdown-item" to="/login">
                Login
              </Link>
              <Link className="dropdown-menu-item dropdown-item" to="/signup">
                Signup
              </Link>                  
            </>
          )}
        <Link className="dropdown-menu-item dropdown-item" to="/signup">
          Help
        </Link> 
      </Dropdown.Menu>
    </Dropdown>
  );
};
