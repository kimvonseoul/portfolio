import React from 'react';
import {FormattedMessage} from 'react-intl';

function Aboutme(){
    return(
        <div className="aboutme">
            <h4><FormattedMessage id="about" /></h4>
            <h5><FormattedMessage id="about.bd" /></h5>
            <h5><FormattedMessage id="about.experience" /></h5>
        </div>
    )
}
export default Aboutme;