import './comStyles.css';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";


const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailValidation = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login)) {
            return true;
        } else {
            return false;
        }
    };

    const passwordValidation = () => {
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            return true;
        } else {
            return false;
        }
    }

    const validator = (event) => {
        event.preventDefault();
        if (emailValidation(login) && passwordValidation(password)){
            addUserToDb();
        } else { 
            console.log("Login error");
        }
    }
    
    const addUserToDb = async () => {
        axios.post('http://localhost:8000/api/v1/users/signup',
            {
                login: `${login}`,
                password: `${password}`
            })
            .then(() => {
                dispatch({ type: 'SET_LOGINED' });
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }
   
    return (
        <div className='registration'>
            <div className="container">
                <div className='regisrtation-box'>
                    <div className='registrationPreBox'>
                        <form onSubmit={validator} className="registrationBox">
                            <h1>Registration</h1>
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
                                <Link to="/login" className="move-to-link">Go to login</Link>
                                <input type="submit" className="registrationButton" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration;