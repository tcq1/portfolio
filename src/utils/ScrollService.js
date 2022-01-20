import {TOTAL_SCREENS} from "./CommonUtils";
import {Subject} from "rxjs";


export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadcaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToContact = () => {
        window.scrollTo({
            top: document.getElementById('Contact Me').offsetTop,
            behavior: 'smooth'
        });
    };

    scrollToHome = () => {
        window.scrollTo({
            top: document.getElementById('Home').offsetTop,
            behavior: 'smooth'
        });
    };

    isElementInView = (element, type) => {
        let rec = element.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;

        let viewportHeight = window.innerHeight;

        let partiallyVisible = elementTop < viewportHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom < viewportHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default:
                return false;
        }
    }

    checkCurrentScreenUnderViewport = (event) => {
        if (!event || Object.keys(event).length < 1) {
            return;
        }

        for (let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);

            if (!screenFromDOM) {
                continue;
            }

            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                       fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }

                if (fullyVisible) {
                    ScrollService.currentScreenBroadcaster.next({
                        screenInView: screen.screen_name
                    })
                    break;
                }
            }
        }
    }
}