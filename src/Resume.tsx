import React from 'react';

function Resume(locale:any){
    if (locale == 'ko'){
        alert('ko');
    }
    return(
        <div>
        <h3>-Resume</h3>
        <p><a href="./resume.pdf" download>download</a></p>
        <tbody className="resume">
            <tr>
                <td>Education</td>
                <td>
                    <h5>SOPHIA UNIVERSITY, Tokyo, Japan</h5>
                    <p>Graduation: March 2025</p>
                    <p>Major:   Management</p>
                    <h5>Selected Courses:</h5>
                    <p>プログラミング演習（C)</p>
                    <p>プログラミング言語論（C)</p>
                    <p>プログラミング基礎（JavaScript)</p>
                </td>
            </tr>
            <tr>
                <td>Experience</td>
                <td>
                    <h5>making server with raspberrypi,     2019</h5>
                    <p>used node.js HTML&CSS</p>
                </td>
            </tr>
            <tr>
                <td>SKILLS</td>
                <td>
                    <h5>Language </h5>
                    <p>Korean: Native speaker</p>
                    <p>Japanese: JLPT N2</p>
                    <p>English: TOEIC 720</p>
                    <h5>Programing</h5>
                    <p>JS, TS, Node.js</p>
                </td>
                
            </tr>
        </tbody>
        </div>
        
    )
}

export default Resume;