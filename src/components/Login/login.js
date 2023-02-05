import { useState } from "react";
import { connect } from "react-redux";
import loginImage from "../../assets/Polls.jpg"
import './login.css'
import {setAuthedUser} from '../../actions/authedUser'
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate();
    const [loggedUser, setLoggeduser] = useState('')

    const handleNameChange = (e) => {
        e.preventDefault();

        setLoggeduser(e.target.value);
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        if(loggedUser){
            props.dispatch(setAuthedUser(loggedUser))
            navigate("/")
        }
    }

    console.log(props.userNames)
    return(
        <div className="main-container">
            <div className="login-container">
                <img src={loginImage} alt="Login" className="login-image"/>
                <select value={loggedUser} onChange={handleNameChange} className="user-dropdown">
                <option value=''>Select User</option>
                {
                    Object.keys(props.users).map((user)=>{
                        return(
                        <option key={props.users[user].id} value={props.users[user].id}>
                            {props.users[user].name}
                        </option>
                        )
                    })
                }
                </select>
                <button disabled={loggedUser===""} className="login-button" onClick={handleLogIn}>Login</button>
            </div>
        </div>
    )
}


const mapStateToProps = ({ users }) => ({
    users,
  });
export default connect(mapStateToProps)(Login)