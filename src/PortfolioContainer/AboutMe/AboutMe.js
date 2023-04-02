import React from "react";
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
        description: "Hi, my name is Trung and I am a Vietnam-born, Germany-raised full stack software developer " +
            "currently working at TraceTronic GmbH in Dresden, Germany. I'm also a master's student at the TU " +
            "Dresden in Computer Science with focus on Software Engineering, AI, and Data Science.",
        highlights: {
            bullets: [
                "Full Stack software developer",
                "Machine Learning enthusiast",
                "Focus on Java and Python",
                "Building web applications",
                "Interest in data science and AI",
            ],
            header: "Here are a few aspects:"
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
                <SectionTitle title={'About Me'} subHeader={'Me in a nutshell'}/>
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
                    </div>
                </div>
            </div>
        </div>
    )
}