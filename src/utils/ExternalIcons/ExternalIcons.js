import React from "react";
import './ExternalIcons.css';

export default function ExternalIcons() {
    return (
        <div className={'external'}>
            {/* Icons to externals sites */}
            <a href={'https://www.linkedin.com/in/trung-chu-8416a11bb/'}>
                <i className={'fa fa-linkedin'}/>
            </a>
            <a href={'https://github.com/tcq1'}>
                <i className={'fa fa-github'}/>
            </a>
        </div>
    )
}