import React, {useState} from 'react';
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";

import './Resume.css';
import EducationLogo from '../../assets/Resume/education.png';
import WorkHistoryLogo from '../../assets/Resume/work-history.png';
import ProgrammingSkillsLogo from '../../assets/Resume/programming-skills.png';
import ProjectsLogo from '../../assets/Resume/projects.png';
import InterestsLogo from '../../assets/Resume/interests.png';

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
                    ) : props.fromDate ? (
                        <div className={'header-date'}>
                            {props.fromDate}
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

                {/* Link */}
                <div className={'resume-header-link'}>
                    <span>{props.linkText ? props.linkText : ''}</span>
                    <a href={props.link ? props.link : ''}>
                        {props.link ? props.link : ''}
                    </a>
                </div>
            </div>
        )
    };

    {/* Resume sections */}
    const resumeBullets = [
        {label: "Work History", logoSrc: WorkHistoryLogo},
        {label: "Education", logoSrc: EducationLogo},
        {label: "Skills", logoSrc: ProgrammingSkillsLogo},
        {label: "Projects", logoSrc: ProjectsLogo},
        {label: "Interests", logoSrc: InterestsLogo}
    ];

    {/* Education history */}
    const educationHistory = [
        {
            title: "Master of Science in Computer Science",
            subTitle: "Technische Universität Dresden",
            description: "Focus on Software Engineering, Data Science and Artificial Intelligence",
            fromDate: "2021",
            toDate: "now"
        },
        {
            title: "Bachelor of Science in Computer Science",
            subTitle: "Technische Universität Dresden",
            description: "Bachelor thesis with the topic 'Generating Taxonomy from large text corpora using Machine Learning'",
            fromDate: "2017",
            toDate: "2021"
        },
        {
            title: "Martin Andersen Nexö Gymnasium Dresden",
            subTitle: "Finished Abitur with a (German) gpa of 1.6",
            description: "Math and science specialized school with advanced courses in Math, English and Physics.",
            fromDate: "2009",
            toDate: "2017"
        }
    ];

    {/* Work history */}
    const workHistory = [
        {
            title: "Conimon GmbH",
            subTitle: "Creating web applications for automatic machine diagnostics.",
            description: "Working with technologies like Spring, Vaadin, Postgres, and more.",
            fromDate: "Nov 2020",
            toDate: "now",
            link: "https://conimon.de",
            linkText: "For more details on our products visit "
        },
        {
            title: "Neuro Imaging Center TU Dresden",
            subTitle: "Implementing a web application for psychology and neuroscience research",
            description: "The web application supports researchers by making imaging pipeline processes more accessible.",
            fromDate: "Apr 2019",
            toDate: "Okt 2020"
        },
        {
            title: "Media center of the TU Dresden",
            subTitle: "Working on the university website",
            description: "First professional software development experience using Python and an in-house framework built on top of Plone.",
            fromDate: "Oct 2018",
            toDate: "Mar 2019"
        }
    ];

    {/* Skills */}
    const programmingSkills = [
        {skill: "Java", ratingPercentage: 95},
        {skill: "Python", ratingPercentage: 95},
        {skill: "Java Script", ratingPercentage: 60},
        {skill: "ReactJS", ratingPercentage: 70},
        {skill: "HTML/CSS", ratingPercentage: 70},
        {skill: "C/C#/C++", ratingPercentage: 50},
        {skill: "Machine Learning", ratingPercentage: 80},
        {skill: "SQL", ratingPercentage: 65}
    ];

    {/* Projects */}
    const projectDetails = [
        {
            title: "Personal portfolio website",
            duration: {
                fromDate: "2022"
            },
            description: "A personal portfolio website to showcase all my details and projects at one place."
        },
        {
            title: "Crypto Currency forecaster",
            duration: {
                fromDate: "2021"
            },
            description: "Attempting to predict the future value of a crypto currency using machine learning. Of course it didn't work out well but I learned a lot about data management and machine learning."
        },
        {
            title: "Flappy Bird AI",
            duration: {
                fromDate: "2019"
            },
            description: "I implemented a Flappy Bird game and trained a neural network with an evolutionary algorithm to play the game. After only a few generations the AI performs extremely well and is basically unbeatable."
        }
    ];

    {/* Interests */}
    const interests = [
        {
            title: "Cooking",
            subHeader: "In the kitchen since I was 10",
            description: "Bored by only having the food of my parents I started to learn how to cook the food that I wanted to eat. This turned into a passion that made me and my personal environment very happy."
        },
        {
            title: "Gaming",
            subHeader: "Strategy games and Strategic Shooters",
            description: "I love competing in games and challenging my mind by having to think about strategies and tactics."
        },
        {
            title: "Coding",
            subHeader: "I'm a fan of learning new things and challenging myself",
            description: "I love to learn new things and I'm always trying to improve my skills with small coding projects. The ones mentioned in the projects tab are only a few of them. More can be found on my GitHub."
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
                            link={work.link}
                            linkText={work.linkText}
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
                <SectionTitle title={'Resume'} subHeader={'My personal and professional achievements'}/>
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
