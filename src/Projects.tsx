import React from 'react';
import {FormattedMessage} from 'react-intl';

function Projects(){
    return(
        <div>
            <h3 className="paragraph"><FormattedMessage id="story.title" /></h3>
            <h4><FormattedMessage id="story.subtitle3" /></h4>
            <p>Github URL: <a href="https://github.com/kimvonseoul/highschool_community">https://github.com/kimvonseoul/highschool_community</a></p>
            <p>
                <FormattedMessage id="story.subtitle3.p1" />
            </p>
            <h4><FormattedMessage id="story.subtitle4" /></h4>
            <p>Github URL: <a href="https://github.com/kimvonseoul/movie_booking_python">https://github.com/kimvonseoul/movie_booking_python</a></p>
            <p>
                <FormattedMessage id="story.subtitle4.p1" /></p>
            <h4><FormattedMessage id="story.subtitle5" /></h4>
            <p>
                <FormattedMessage id="story.subtitle5.p1" />
            </p>
            <h4><FormattedMessage id="story.subtitle6" /></h4>
            <p>Github URL: <a href="https://github.com/kimvonseoul/timetable_next.js">https://github.com/kimvonseoul/timetable_next.js</a></p>
            <p>
                <FormattedMessage id="story.subtitle6.p1" />
            </p>
        </div>
    )
}

export default Projects;