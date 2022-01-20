import React from "react";
import './SectionTitle.css';

export default function SectionTitle(props) {
    return (
        <div className={'title-container'}>
            <div className={'title-header'}>
                <span>{props.title}</span>
            </div>

            {
                (props.subHeader) ? (
                    <div className={'section-sub-header'}>
                        <span>{props.subHeader}</span>
                    </div>
                ) : null
            }

            <div className={'title-separator'}>
                <div className={'separator-line'}>
                    <div className={'separator-blob'}>
                        <div className={'blob'} />
                    </div>
                </div>
            </div>
        </div>
    );
}