import React from 'react';
import {FormattedMessage} from 'react-intl';
function Skills(){
    return(
        <div className="skills">
        <h3><FormattedMessage id="skills" /></h3>

        <p><FormattedMessage id="skills.p1" /></p>
        <p><FormattedMessage id="skills.p2" /></p>
        <div className="resume">
            <table>
        <tbody >
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
        </table>
        </div>
        </div>
    )
}
export default Skills;