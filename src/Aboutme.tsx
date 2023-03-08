import React from 'react';
import {FormattedMessage} from 'react-intl';

function Aboutme(){
    return(
        <div className="aboutme">
            <h3><FormattedMessage id="about" /></h3>
            <p><FormattedMessage id="about.bd" /></p>
            <div className="resume">
            <table>
        <tbody >
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
        </tbody>
        </table>
        </div>
        </div>
    )
}
export default Aboutme;