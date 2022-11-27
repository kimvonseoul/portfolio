import React from 'react';
import {FormattedMessage} from 'react-intl';
function Skills(){
    return(
        <div className="skills">
        <h3><FormattedMessage id="skills" /></h3>

        <p><FormattedMessage id="skills.p1" /></p>
        <p><FormattedMessage id="skills.p2" /></p>
        </div>
    )
}
export default Skills;