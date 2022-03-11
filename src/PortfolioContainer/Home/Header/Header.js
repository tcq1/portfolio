import React, {useEffect, useState} from 'react';
import './Header.css';
import {TOTAL_SCREENS, GET_SCREEN_INDEX} from "../../../utils/CommonUtils";
import ScrollService from "../../../utils/ScrollService";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Header() {
    {/* Selected screen */}
    const [selectedScreen, setSelectedScreen] = useState(0);
    {/* Header options */}
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    {/* Update the screen */}
    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) {
            return;
        }

        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);

        if (screenIndex < 0) {
            return;
        }
    }

    {/* Subscription for current screen */}
    let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

    {/* Menu Options */}
    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, index) => {
                return (
                    <div key={screen.screen_name} className={getHeaderOptionsClass(index)}
                         onClick={() => switchScreen(index, screen)}>
                        <span>{screen.screen_name}</span>
                    </div>
                )
            })
        )
    }

    {/* CSS class for options */}
    const getHeaderOptionsClass = (index) => {
        let className = "header-option ";

        if (index < TOTAL_SCREENS.length - 1) {
            className += "header-option-separator ";
        }

        if (selectedScreen === index) {
            className += "header-option-selected ";
        }

        return className;
    }

    {/* Screen switcher */}
    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) {
            return;
        }

        screenComponent.scrollIntoView({behavior: "smooth"});
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }

    {/* Unsubscribe after the transition */}
    useEffect(() => {
        return () => {
            currentScreenSubscription.unsubscribe();
        }
    }, [currentScreenSubscription]);

    return (
        <div className={"header-container"} onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
            {/* Parent */}
            <div className={"header-parent"}>
                {/* Logo */}
                <div className={'header-logo'}>
                    <span>Trung Chu</span>
                </div>

                {/* Menu button for mobile devices */}
                <div className={"header-hamburger"} onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                    <FontAwesomeIcon className={'header-hamburger-bars'} icon={faBars} />
                </div>

                {/* Menu options */}
                <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>
                    {getHeaderOptions()}
                </div>
            </div>
        </div>
    );
}