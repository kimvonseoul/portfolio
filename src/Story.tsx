import React from 'react';
import {FormattedMessage} from 'react-intl';

function Stroy(){
    return(
        <div>
            <h4 className="paragraph"><FormattedMessage id="story.title" /></h4>
            <h5><FormattedMessage id="story.subtitle2" /></h5>
            <p className="paragraph">
                <FormattedMessage id="story.subtitle2.p1" />
            </p>
            <h5><FormattedMessage id="story.subtitle3" /></h5>
            <p>
                <FormattedMessage id="story.subtitle3.p1" />
            </p>
            <h5><FormattedMessage id="story.subtitle4" /></h5>
            <p>
                <FormattedMessage id="story.subtitle4.p1" />
                <FormattedMessage id="story.subtitle4.p2" />
                <FormattedMessage id="story.subtitle4.p3" />
            </p>
            <h5><FormattedMessage id="story.subtitle5" /></h5>
            <p>
                <FormattedMessage id="story.subtitle5.p1" />
            </p>
            <a href="https://github.com/kimvonseoul/movie_booking_python" target='_blank'>go to look my code!</a>
            <h5><FormattedMessage id="story.subtitle6" /></h5>
            <p>
                <FormattedMessage id="story.subtitle6.p1" />
            </p>
        </div>
    )
}

export default Stroy;