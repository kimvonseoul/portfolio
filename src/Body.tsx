import React from 'react';
import Resume from './Resume';
import Skills from './Skills';
import Story from './Story';

function Body() {
    return(
        <>
            <p>this is a body.</p>
            <Skills />
            <Resume />
            <Story />
        </>
    )
}
export default Body;