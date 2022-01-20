import React, {useState} from 'react';
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";

import './Resume.css';
import EducationLogo from '../../assets/Resume/education.svg';
import WorkHistoryLogo from '../../assets/Resume/work-history.svg';
import ProgrammingSkillsLogo from '../../assets/Resume/programming-skills.svg';
import ProjectsLogo from '../../assets/Resume/projects.svg';
import InterestsLogo from '../../assets/Resume/interests.svg';

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return;
        }

        Animations.animations.fadeInScreen(props.id);
    };

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    {/* Resume item */}
    const ResumeHeader = (props) => {
        return (
            <div className={'resume-header'}>
                {/* Resume item title */}
                <div className={'resume-main-header'}>
                    {/* Resume item */}
                    <div className={'header-bullet'} />
                    {/* Resume header */}
                    <span>{props.header ? props.header : ''}</span>
                    {/* Date */}
                    {props.fromDate && props.toDate ? (
                        <div className={'header-date'}>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : <div />}
                </div>
                {/* Resume information text */}
                <div className={'resume-sub-header'}>
                    <span>{props.subHeader ? props.subHeader : ''}</span>
                </div>

                {/* More detailed information text */}
                <div className={'resume-header-description'}>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        )
    };

    {/* Resume sections */}
    const resumeBullets = [
        {label: "Work History", logoSrc: WorkHistoryLogo},
        {label: "Education", logoSrc: EducationLogo},
        {label: "Programming Skills", logoSrc: ProgrammingSkillsLogo},
        {label: "Projects", logoSrc: ProjectsLogo},
        {label: "Interests", logoSrc: InterestsLogo}
    ];

    {/* Education history */}
    const educationHistory = [
        {
            title: "Master of Science in Computer Science",
            subTitle: "Technische Universität Dresden",
            description: "Super geil",
            fromDate: "2021",
            toDate: "now"
        },
        {
            title: "Bachelor of Science in Computer Science",
            subTitle: "Technische Universität Dresden",
            description: "Super geil",
            fromDate: "2017",
            toDate: "2021"
        },
        {
            title: "Martin Andersen Nexö Gymnasium Dresden",
            subTitle: "Mathe",
            description: "Super geil",
            fromDate: "2009",
            toDate: "2017"
        }
    ];

    {/* Work history */}
    const workHistory = [
        {
            title: "Master of Science in Computer Science",
            subTitle: "Technische Universität Dresden",
            description: "Super geil",
            fromDate: "2021",
            toDate: "now"
        },
        {
            title: "Bachelor of Science in Computer Science",
            subTitle: "Technische Universität Dresden",
            description: "Super geil",
            fromDate: "2017",
            toDate: "2021"
        },
        {
            title: "Martin Andersen Nexö Gymnasium Dresden",
            subTitle: "Mathe",
            description: "Super geil",
            fromDate: "2009",
            toDate: "2017"
        }
    ];

    {/* Skills */}
    const programmingSkills = [
        {skill: "Java", ratingPercentage: 90},
        {skill: "Python", ratingPercentage: 90},
        {skill: "Java Script", ratingPercentage: 60},
        {skill: "ReactJS", ratingPercentage: 70},
    ];

    {/* Projects */}
    const projectDetails = [
        {
            title: "Personal portfolio website",
            duration: {
                fromDate: "2022",
                toDate: "2022"
            },
            subHeader: "Technologies used: React JS",
            description: "A personal portfolio website to showcase all my details and projects at one place."
        }
    ];

    {/* Interests */}
    const interests = [
        {
            title: "Cooking",
            subHeader: "I love cooking",
            description: "Cooking is my life"
        }
    ];

    {/* Resume component */}
    const resumeDetails = [
        <div className={'resume-screen-container'} key={'work-history'}>
            {/* Work history */}
            {workHistory.map((work, index) => {
                return (
                    <div key={index}>
                        <ResumeHeader
                            header={work.title}
                            subHeader={work.subTitle}
                            fromDate={work.fromDate}
                            toDate={work.toDate}
                        />

                        <div className={'experience-description'}>
                            <span className={'resume-description-text'}>
                                {work.description}
                            </span>
                            <br/>
                        </div>
                    </div>
                )
            })}
        </div>,

        <div className={'resume-screen-container'} key={'education'}>
            {/* Education */}
            {educationHistory.map((education, index) => {
                return (
                    <ResumeHeader
                        key={index}
                        header={education.title}
                        subHeader={education.subTitle}
                        description={education.description}
                        fromDate={education.fromDate}
                        toDate={education.toDate}
                    />
                )
            })}
        </div>,

        <div className={'resume-screen-container programming-skills-container'} key={'programming-skills'}>
            {/* Skills */}
            {programmingSkills.map((skill, index) => (
                <div className={'skill-parent'} key={index}>
                    {/* Bullet */}
                    <div className={'header-bullet'} />
                    {/* Skill name */}
                    <span>{skill.skill}</span>
                    {/* Rating */}
                    <div className={'skill-percentage'}>
                        <div style={{width: skill.ratingPercentage + "%"}} className={'active-percentage-bar'} />
                    </div>
                </div>
            ))}
        </div>,

        <div className={'resume-screen-container'} key={'projects'}>
            {/* Projects */}
            {projectDetails.map((projectDetails, index) => {
                return <ResumeHeader key={index}
                              header={projectDetails.title}
                              subHeader={projectDetails.subHeader}
                              description={projectDetails.description}
                              fromDate={projectDetails.duration.fromDate}
                              toDate={projectDetails.duration.toDate}/>
            })}
        </div>,

        <div className={'resume-screen-container'} key={'interests'}>
            {/* Interests */}
            {interests.map((interest, index) => {
                return <ResumeHeader key={index}
                              header={interest.title}
                              subHeader={interest.subHeader}
                              description={interest.description}/>
            })}
        </div>
    ];

    {/* Carousel Menu */}
    const handleCarousel = (index) => {
        let offsetHeight = 360;
        let newCarouselOffset = {
            style: {
                transform: "translateY(" + index * offsetHeight * -1 + "px)"}
            };
        setCarouselOffsetStyle(newCarouselOffset);
        setSelectedBulletIndex(index);
    };

    {/* Carousel bullets */}
    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onClick={() => handleCarousel(index)}
                 className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                 key={index}>
                <img className={'bullet-logo'} src={bullet.logoSrc} alt={"Couldn't load icon"} key={bullet.logoSrc} />
                <span className={'bullet-label'}>{bullet.label}</span>
            </div>
        ));
    };

    {/* Map details to current option */}
    const getResumeScreen = () => {
        return (
            <div style={carouselOffsetStyle.style} className={'resume-details-carousel'}>
                {resumeDetails.map((resumeDetail) => resumeDetail)}
            </div>
        )
    };

    return (
        <div className={'resume-container screen-container fade-in'} id={props.id || ""}>
            <div className={'resume-content'}>
                {/* Header */}
                <SectionTitle title={'Resume'} subHeader={'My formal CV'}/>
                {/* Card */}
                <div className={'resume-card'}>
                    {/* Left menu */}
                    <div className={'resume-bullets'}>
                        <div className={'bullet-container'}>
                            <div className={'bullet-icons'} />
                            <div className={'bullets'}>
                                {getBullets()}
                            </div>
                        </div>
                    </div>
                    {/* Right content */}
                    <div className={'resume-bullet-details'}>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}
