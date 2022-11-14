import {useState} from 'react';
import koMessage from './lang/ko.json';
import enMessage from './lang/en.json';
const LangB=({koOnclick, enOnclick, jpOnclick}:any)=>{
    //const [locale, setLocale] = useState(koMessage);
    //const koOnclick = () => getLocale(1);
    //const enOnclick = () => getLocale(2);
    return(
        <div className="lang">
            <p>lang</p>
            <button
                onClick={koOnclick}>ko</button>
            <button onClick={enOnclick}>en</button>
            <button onClick={jpOnclick}>jp</button>
        </div>
    );
}
export default LangB;