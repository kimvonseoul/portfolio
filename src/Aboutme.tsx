import React from 'react';
import {FormattedMessage} from 'react-intl';

function Aboutme(){
    return(
        <>
            <h4><FormattedMessage id="about" /></h4>
            <h3><FormattedMessage id="about.bd" /></h3>
            <h3><FormattedMessage id="about.experience" /></h3>
        </>
    )
}
export default Aboutme;