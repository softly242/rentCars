import { NavLink, Link } from 'react-router-dom';
import logo1 from '../images/logo1.svg';

export const Header = () => {
  return (
    <>
      <button></button>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/carlist">CarList</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <div>
        <span>{logo1}</span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <Link></Link>
        <button></button>
        <button></button>
      </ul>
    </>
  );
};
