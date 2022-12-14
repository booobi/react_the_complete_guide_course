import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const onLogout = () => dispatch(authActions.logout());
  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
