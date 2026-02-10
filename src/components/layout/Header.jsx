import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const linkClass = ({ isActive }) =>
    [
      'text-sm font-medium tracking-wide',
      'hover:opacity-90',
      'focus:outline-none focus:ring-2 focus:ring-white/70 rounded-md px-2 py-1',
      isActive ? 'underline underline-offset-4' : 'no-underline',
    ].join(' ');

  return (
    <header className="w-full bg-[#7a7765] text-white">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo (external link) */}
        <a
          href="https://www.humanrightsfirst.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <img className="w-[92px] h-auto" src={Logo} alt="Human Rights First logo" />
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-6 md:gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/graphs" className={linkClass}>
            Graphs
          </NavLink>

          {isAuthenticated && (
            <NavLink to="/profile" className={linkClass}>
              Profile
            </NavLink>
          )}

          {/* Auth buttons */}
          <div className="ml-2">
            <LoggingButtons />
          </div>
        </nav>
      </div>
    </header>
  );
}
