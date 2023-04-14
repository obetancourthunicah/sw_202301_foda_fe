import {useState} from 'react';
import decode from 'jwt-decode';
import { LoginUX } from "./LoginUX";
import { setSec } from '@/store/slices/secSlice';
import {useLoginMutation} from '@/store/services/secServices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, {isLoading, status, error}] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
      setPasswordError("");
    }
  }
  const onClickHandler = async () => {
    if (!(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm).test(password)) {
      setPasswordError("Password is not valid");
    } else {
      const data = await login({email, password}).unwrap();
      const { _id } = decode(data.token) as {_id:string};
      dispatch(setSec({email, name: '', token: data.token, _id}));
      navigate('/');
    }
  }
  return (
    <LoginUX
      email={email}
      password={password}
      passwordError={passwordError}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
    />
  )
}
export default Login;
