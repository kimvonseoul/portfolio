import {useState} from 'react';
function LangB(){
    const [locale, setLocale] = useState('ko');
    const koOnclick = () => setLocale('ko');
    const enOnclick = () => setLocale('en');

    return(
        <>
            <button
                onClick={koOnclick}>ko</button>
            <button onClick={enOnclick}>en</button>
        </>
    );
}
export default LangB;