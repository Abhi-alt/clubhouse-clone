import React, {useState} from 'react';
import style from '../style/phoneConfirm.module.css';
import {Link} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

export default function PhoneConfirmation(){
    const [value, setValue] = useState();
    return (
        <div className={style.phoneConfirmContainer}>
            <Link exact to="/" className={style.backBtn}>
                <img src="images/arrow.png"/>
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput international defaultCountry="IN" value={value} onChange={setValue}/>
            <p>By entering your number, you're agreeing to our <span>Terms of Service and Privacy Policy. </span>Thanks!</p>
            <Link exact to="/code_confirm" className="primaryBtnC d-flex align-items-center">
                <span>Next</span> <img src="images/nextArrow.svg" className="ml-1 nextArrow" />
            </Link>
        </div>
    )
}