import {useState} from "react";
import {FormattedMessage} from "react-intl";
import {IntlProvider} from 'react-intl';
import LangB from "./LangB";
import koMessage from './lang/ko.json';
import enMessage from './lang/en.json';
import jpMessage from './lang/jp.json';
import { object } from "prop-types";
import Header from "./Header";
import Body from './Body'
import Nav from "./Navigation";
import { json } from "body-parser";

function Page(){
    //const msg = locale + "Message";
    //const k:object = koMessage;
    //const e:object = enMessage;
    const msg = [enMessage, koMessage, jpMessage];
    const [locale, setLocale] = useState(msg[0]);
    const koOnclick:any = () => {
        setLocale(msg[1]);
        //alert('ko');
    };
    const enOnclick:any = () => setLocale(msg[0]);
    const jpOnclick:any = () => setLocale(msg[2]);


    return(
            <>
            <IntlProvider locale="ko" messages={locale} >
                <Header 
                 koOnclick={koOnclick}
                 enOnclick={enOnclick}
                 jpOnclick={jpOnclick}

                />
                <Body />
            </IntlProvider>
            </>
    );
};

export default Page;