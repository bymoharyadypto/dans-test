import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { userSignIn } from '../store/actionCreators/userCreator';

export default function LoginPage() {
  const [newUser, stateNewUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeForm = (event) => {
    stateNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    dispatch(userSignIn(newUser)).then(() => {
      navigate('/');
    });
  };
  return (
    <>
      <form onSubmit={handleSubmitLogin}>
        <div>
          <input name="email" value={newUser.email} onChange={handleChangeForm} type="email" id="exampleInputEmail" placeholder="Email" />
        </div>
        <div>
          <input name="password" value={newUser.password} onChange={handleChangeForm} type="password" id="exampleInputPassword" placeholder="Password" />
        </div>
        <button type="submit">Login</button>
        <hr />
      </form>
    </>
  );
}
