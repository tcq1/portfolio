import React from "react";
import './Separator.css';
import FooterImage from '../../assets/Home/shape-bg.png';

export default function Separator() {
    return (
        <div className={'separator-container'}>
            <div className={'separator-parent'}>
                {/*<img src={FooterImage} alt={'footer-image'}/>*/}
                <section className="curved"/>
            </div>
        </div>
    );
}