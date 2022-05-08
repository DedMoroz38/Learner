import './comStyles.css';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import axios from 'axios';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validator = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/v1/users/login',
            {
                login: `${login}`,
                password: `${password}` 
            })
            .then(() => {
                dispatch({ type: 'SET_LOGINED' });
                navigate('/');
            })
            .catch((err) => {
                if(err.response.data.message === 0){
                    console.log("Wrong password!");
                }
            });
    }

    return (
        <div className='registration'>
            <div className="container">
                <div className='regisrtation-box'>
                    <div className='registrationPreBox'>
                        <form onSubmit={validator} className="registrationBox">
                            <h1>Login</h1>
                            <div className='input-box'>
                                <LockIcon className='input-icon' />
                                <input placeholder='E-mail...' 
                                    className='registrationInput' 
                                    type='text' 
                                    onChange={(e) => {
                                        setLogin(e.target.value);}}
                                />
                            </div>
                            <div className='input-box'>
                                <EmailIcon className='input-icon' />
                                <input placeholder='Password...' 
                                    className='registrationInput' 
                                    type={showPassword ? 'text' : "password"} 
                                    onChange={(e) => {
                                        setPassword(e.target.value);}}
                                />
                                <div className="passwordToggle" onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>
                            </div>

                            <div className='box-button'>
                                <Link to="/registration" className="move-to-link">Go to regisrtation</Link>
                                <input type="submit" className="registrationButton" value="Log in" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;