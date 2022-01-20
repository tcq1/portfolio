import React, {useEffect} from "react";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";

import "./AboutMe.css";

export default function AboutMe(props) {
    {/* Fade in screen handler */}
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return;
        }

        Animations.animations.fadeInScreen(props.id);
    }

    {/* Fade in screen subscription */}
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    {/* Displayed text */}
    const SCREEN_CONSTANTS = {
        description: "Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.",
        highlights: {
            bullets: [
                "Full Stack web and mobile development",
                "Interactive Front End as per the design",
                "React and React native",
                "Redux for State Management",
                "Building REST API",
                "Managing database"
            ],
            header: "Here are a few Highlights:"
        }
    }

    {/* Render the items */}
    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, index) => {
                return (
                    <div className={'highlight'} key={index}>
                        <div className={'highlight-blob'}/>
                        <span>{value}</span>
                    </div>
                )
            })
        )
    }

    return (
        <div className={'about-me-container screen-container fade-in'} id={props.id || ""}>
            {/* Parent */}
            <div className={'about-me-parent'}>
                {/* Title */}
                <SectionTitle title={'About Me'} subHeader={'My life in a nutshell'}/>
                {/* Card */}
                <div className={'about-me-card'}>
                    {/* Profile picture */}
                    <div className={'about-me-profile'} />

                    {/* Text */}
                    <div className={'about-me-details'}>
                        {/* Description text */}
                        <span className={'about-me-description'}>
                            {SCREEN_CONSTANTS.description}
                        </span>

                        {/* Highlights */}
                        <div className={'about-me-highlights'}>
                            {/* Highlights header */}
                            <div className={'about-me-highlights-header'}>
                                {SCREEN_CONSTANTS.highlights.header}
                            </div>

                            {/* Highlights */}
                            {renderHighlights()}
                        </div>

                        {/* Buttons */}
                        <div className={'about-me-options'}>
                            <div className={'profile-options'}>
                                <button className={'primary-btn'} onClick={() => ScrollService.scrollHandler.scrollToContact()}>
                                    Contact Me
                                </button>
                                <a href={'cv.pdf'} download={'Trung_Chu.pdf'}>
                                    <button className={'highlighted-btn'}>
                                        Get Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}