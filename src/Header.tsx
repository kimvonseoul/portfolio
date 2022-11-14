import React from 'react';
import {FormattedMessage} from "react-intl";
import {IntlProvider} from 'react-intl';
import LangB from './LangB';
import Nav from './Navigation';

function Header({locale, koOnclick, enOnclick, jpOnclick}:any) {
    return(
        <header className="header">
            <h1>
                <FormattedMessage id="header" />
            </h1>
            <Nav />
            <LangB 
            koOnclick={koOnclick}
            enOnclick={enOnclick}
            jpOnclick={jpOnclick}
            />
        </header>
        
    )
}

export default Header;