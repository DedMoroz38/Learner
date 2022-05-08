import { Link } from 'react-router-dom';
import './comStyles.css';

const LoginBox = () => {
    return(
        <div className="loginBox">
            <div className='link-box link-box1'>
                <Link to="/registration" className="profileBoxRegistration">Sign up</Link>
                <div className='link-hover'>

                </div>
            </div>
            <div className='link-box link-box2'>
                <Link to="/login" className="profileBoxRegistration">Log in</Link>
                <div className='link-hover'>

                </div>
            </div>
        </div>
    )
}
export default LoginBox;