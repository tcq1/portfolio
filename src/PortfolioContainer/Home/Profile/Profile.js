import React from "react";
import Typical from "react-typical";

import ExternalIcons from "../../../utils/ExternalIcons/ExternalIcons";
import './Profile.css';
import ScrollService from "../../../utils/ScrollService";

export default function Profile() {
    return (
        <div className={'profile-container'}>
            <div className={'profile-parent'}>

                <div className={'profile-details'}>
                    {/* Icons to externals sites */}
                    <ExternalIcons />

                    {/* Introduction text */}
                    <div className={'profile-details-name'}>
                        <span className={'primary-text'}>
                            Hi, I am <span className={'highlighted-text'}> Trung</span>!
                        </span>
                    </div>

                    {/* Current roles */}
                    <div className={'profile-details-roles'}>
                        <span className={'primary-text'}>
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full stack developer 💻",
                                        1000,
                                        "Computer Science Bachelor 🎓",
                                        1000,
                                        "Software Engineer at Conimon 🖥️",
                                        1000,
                                        "Master's student at TU Dresden 📚",
                                        1000,
                                    ]}
                                />
                            </h1>
                        </span>

                        <span className={'profile-role-tagline'}>
                            Developing software since 2015
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className={'profile-options'}>
                        <a href={'mailto:tru.chu.qu@gmail.com'}>
                            <button className={'primary-btn'}>
                                Contact Me
                            </button>
                        </a>
                        <a href={'cv.pdf'} download={'Trung_Chu.pdf'}>
                            <button className={'highlighted-btn'}>
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>

                {/* Profile picture */}
                <div className={'profile-picture'}>
                    <div className={'profile-picture-background'}>
                    </div>
                </div>
            </div>
        </div>
    )
}