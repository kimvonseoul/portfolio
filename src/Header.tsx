import React from 'react';
import {FormattedMessage} from "react-intl";
import {IntlProvider} from 'react-intl';

function Header(locale:any) {
    return(
        <IntlProvider locale="ko" messages={locale}>
            <header>
            <h1>
                <FormattedMessage id="header" />
            </h1>
        </header>
        </IntlProvider>
        
    )
}

export default Header;