import { Link } from 'react-router-dom';
import './comStyles.css';
import icon from '../images/profileIcon.png';
import LoginBox from './loginBox';
import { getLoginStatus } from "../store/login/selectors";
import { useSelector, useDispatch } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router";

const Header = () => {
    const isAuthorised = useSelector((state) => getLoginStatus(state));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logout = () => {
        dispatch({ type: 'UNSET_LOGINED' });
        navigate('/');
    }

    return (
        <div className='header'>
            <div className='container'>
                <div className='headerBox'>
                    <Link to="/" className='title'>Learner</Link>
                    <div className='header-right'>
                        {isAuthorised ?
                         <button className='logout-button'
                                onClick={() => logout()}
                         ><LogoutIcon sx={{ color: "rgb(94, 14, 148)", cursor: "pointer" }}/></button> : 
                         <LoginBox/>}
                        <Link to="/profile" className="profileBox"><img src={icon} alt="profileIcon" /></Link>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Header;