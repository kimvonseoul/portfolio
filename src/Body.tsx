import React from 'react';
import Aboutme from './Aboutme';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';

function Body() {
    
    return(
        <div className="body">
            <section id="about">
                <Aboutme />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="resume">
                <Resume />
            </section>
            <section id="projects">
                <Projects />
            </section>
            
        </div>
    )
}
export default Body;