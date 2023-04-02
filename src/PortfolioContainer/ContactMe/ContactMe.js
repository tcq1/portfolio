import React, {useState} from 'react';
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import ExternalIcons from "../../utils/ExternalIcons/ExternalIcons";
import Typical from "react-typical";
import {toast} from "react-toastify";

import imgBack from '../../assets/ContactMe/images/mailz.jpeg';
import load from '../../assets/ContactMe/images/load.gif';
import './ContactMe.css';

export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return;
        }

        Animations.animations.fadeInScreen(props.id);
    };

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    {/* Contact form fields */}
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    {/* Submit form */}
    const submitForm = async (e) => {
        e.preventDefault();

        toast.error('Currently disabled. Contact me via email: tru.chu.qu@gmail.com')

        // try {
        //     let data = {
        //         name,
        //         email,
        //         message
        //     };
        //
        //     setIsLoading(true);
        //
        //     const result = await axios.post('/contact', data);
        //
        //     if (name.length === 0 || email.length === 0 || message.length === 0) {
        //         {/* Error message */}
        //         setBanner(result.data.message);
        //         toast.error(result.data.message);
        //         setIsLoading(false);
        //     } else if (result.status === 200) {
        //         {/* Success message */}
        //         setBanner(result.data.message);
        //         toast.success(result.data.message);
        //         setIsLoading(false);
        //
        //         setName('');
        //         setEmail('');
        //         setMessage('');
        //     } else {
        //         {/* Error message */}
        //         setBanner(result.data.message);
        //         toast.error("Error Code " + result.status);
        //         setIsLoading(false);
        //     }
        //
        // } catch (error) {
        //     console.log(error.message);
        //     toast.error("Error: " + error.message);
        //     setIsLoading(false);
        // }
    };

    {/* Process form */}
    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div className={'main-container fade-in'} id={props.id || ''}>
            {/* Section title */}
            <SectionTitle title={'Contact Me'} subHeader={"Let's get into touch"}/>

            <div className={'central-form'}>
                <div className={'top-part'}>
                    {/* Typical text */}
                    <h2 className={'typical-text'}>
                        <Typical loop={Infinity} steps={["Feel free to contact me! 📧", 1000]} />
                    </h2>

                    {/* External Icons */}
                    <ExternalIcons />
                </div>

                <div className={'back-form'}>
                    {/* Left part */}
                    <div className={'img-back'}>
                        <h4>Send your Email here!</h4>
                        <img src={imgBack} alt={''}/>
                    </div>

                    {/* Form */}
                    <form onSubmit={submitForm}>
                        {/* Success banner */}
                        <p>{banner}</p>

                        {/* Name field */}
                        <label htmlFor={'name'}>Name</label>
                        <input type={'text'} onChange={handleName} value={name}/>

                        {/* Email field */}
                        <label htmlFor={'email'}>Email</label>
                        <input type={'email'} onChange={handleEmail} value={email}/>

                        {/* Message field */}
                        <label htmlFor={'message'}>Message</label>
                        <textarea onChange={handleMessage} value={message}/>

                        {/* Button */}
                        <div className={'send-btn'}>
                            {isLoading ?
                                <b className={'loading'}>
                                    <img src={load} alt={'Loading...'} />
                                </b> :
                                <button type={'submit'}>
                                    send <i className={'fa fa-paper-plane'} />
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}