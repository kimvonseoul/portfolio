import {FormattedMessage} from "react-intl";
import {IntlProvider} from 'react-intl';
import LangB from "./LangB";
import koMessage from './lang/ko.json';
import enMessage from './lang/en.json';

function Page(){
    return(
            <IntlProvider locale="en" messages={enMessage}>
                <LangB />
                <p>
                    <FormattedMessage 
                        id="title"
                        //values={{locale:"en"}}
                        />
                </p>
            </IntlProvider>
    );
};

export default Page;