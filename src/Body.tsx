import React from 'react';
import Aboutme from './Aboutme';
import Resume from './Resume';
import Skills from './Skills';
import Story from './Story';

function Body() {
    return(
        <div className="body">
            <Aboutme />
            <Skills />
            <Resume />
            <Story />
        </div>
    )
}
export default Body;