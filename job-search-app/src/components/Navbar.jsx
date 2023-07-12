import { Link, useNavigate } from 'react-router-dom';
export default function Navbar() {
  const access_token = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const handleSignIn = (event, path) => {
    event.preventDefault();
    navigate(path);
  };
  const handleSignOut = (event, path) => {
    event.preventDefault();
    localStorage.clear();
    navigate(path);
  };

  //   const handleHomePage = (event, path) => {
  //     event.preventDefault();
  //     navigate(path);
  //   };

  return (
    <>
      <nav style={{ backgroundColor: '#6495ED', color: 'white', padding: '20px' }}>
        <Link to="/">Github Jobs</Link>
        <div style={{ float: 'right' }}>{access_token ? <button onClick={(event) => handleSignOut(event, '/sign-in')}>Logout</button> : <button onClick={(event) => handleSignIn(event, '/sign-in')}>Login</button>}</div>
      </nav>
    </>
  );
}
