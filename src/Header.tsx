import React from 'react';
import {FormattedMessage} from "react-intl";
import {IntlProvider} from 'react-intl';

function Header(locale:any) {
    return(
        <header>
            <h1>
                <FormattedMessage id="header" />
            </h1>
        </header>
        
    )
}

export default Header;