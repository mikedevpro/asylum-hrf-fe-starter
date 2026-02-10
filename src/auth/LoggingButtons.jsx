import { useAuth0 } from '@auth0/auth0-react';

export const LoggingButtons = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  if (isLoading) return null;

  if (!isAuthenticated) {
    return (
      <button className="nav-btn" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    );
  }

  return (
    <button
      className="nav-btn"
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </button>
  );
};
