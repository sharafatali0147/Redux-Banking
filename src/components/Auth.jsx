import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { toggleLogin } from '../actions/bankingActions';

const Auth = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const loginHandler = () => {
        dispatch(toggleLogin());
    }
    return (
        <div>
            
            <button onClick={loginHandler} className="btn btn-info">{isLoggedIn ? "Logout":"Login" }</button>
        </div>
    )
}

export default Auth
