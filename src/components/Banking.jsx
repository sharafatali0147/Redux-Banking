import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { collectInterest, deleteAccount, deposit, toggleAccount, withdraw } from '../actions/bankingActions';

const Banking = () => {

    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();

    const handleDeposit = () => {
        dispatch(deposit(amount));
        setAmount(0)
     };

    const handleWithdraw = () => {
        dispatch(withdraw(amount));
        setAmount(0)
    };

    const handleCollectInterest = () => {
        dispatch(collectInterest())
     };

    const handleDelete = () => {
            dispatch(deleteAccount())
    };
    
    const handleAccountChange = () => {
        dispatch(toggleAccount())
    };

    return (
        <div className="form-group" >
            <div style={{ paddingLeft: 470, paddingRight: 470, paddingBottom: 20}}>
                <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            
            <button onClick={handleDeposit} className="btn btn-success">Deposit</button>
            <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>
            <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>
            <button onClick={handleDelete} className="btn btn-danger">Delete Account</button>
            <button onClick={handleAccountChange} className="btn btn-secondary">Change Account</button>
        </div>
    )
}

export default Banking
