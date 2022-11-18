import React from 'react';
import {FormattedMessage} from 'react-intl';

function Stroy(){
    return(
        <div>
            <h4 className="paragraph:shown"><FormattedMessage id="story.title" /></h4>
            <h5><FormattedMessage id="story.subtitle1" /></h5>
            <h5><FormattedMessage id="story.subtitle2" /></h5>
            <p className="paragraph">
                <FormattedMessage id="story.subtitle2.p1" />
                <FormattedMessage id="story.subtitle2.p2" />
                <FormattedMessage id="story.subtitle2.p3" />
                <FormattedMessage id="story.subtitle2.p4" />
            </p>
            <h5><FormattedMessage id="story.subtitle3" /></h5>
            <p>
                <FormattedMessage id="story.subtitle3.p1" />
                <FormattedMessage id="story.subtitle3.p2" />
                <FormattedMessage id="story.subtitle3.p3" />
                <FormattedMessage id="story.subtitle3.p4" />
                <FormattedMessage id="story.subtitle3.p5" />
                <FormattedMessage id="story.subtitle3.p6" />
            </p>
            <h5><FormattedMessage id="story.subtitle4" /></h5>
            <p>
                <FormattedMessage id="story.subtitle4.p1" />
                <FormattedMessage id="story.subtitle4.p2" />
                <FormattedMessage id="story.subtitle4.p3" />
            </p>
        </div>
    )
}

export default Stroy;