import {useState} from 'react';
import { LoginUX } from "./LoginUX";
import { setSec } from '@/store/slices/secSlice';
import { useDispatch } from 'react-redux';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("LOGIN", event.currentTarget);
    const { name, value } = event.currentTarget;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
      setPasswordError("");
    }
  }
  const onClickHandler = () => {
    console.log("LOGIN", {email, password});
    if (!(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm).test(password)) {
      console.log("LOGIN", "Password is valid");
      setPasswordError("Password is not valid");
    }
    dispatch(setSec({email, name: '', token: "1234567890", _id: "1234567890"}));
    // TODO: Call API
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
