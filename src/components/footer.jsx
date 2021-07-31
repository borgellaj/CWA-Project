import React from 'react'

const Footer = ({location}) => {
    // console.log(location.location)
    return (
        <footer className={location.location.pathname === '/' ? `homefooter footer` : `footer`} >
            <ul>
                <li><a href="https://sites.google.com/baccc.net/apprenticeship/programs-in-colleges/#h.uliwsc8fq6g">Link to Bay Area Apprenticeship Programs</a></li>
                <li><a href="https://district9.cwa-union.org/">Link to Communications Workers of America District 9 Website</a></li>
                <li><a href="http://chabotcollege.edu/">Link to Chabot Community College</a> </li>
                <li><a href="https://www.foa.org/">Link to FOA</a></li>
                <li><a href="https://www.dir.ca.gov/das/">Link to California Division of Apprenticeship Standards</a> </li>
                <li><a href="https://www.dol.gov/eta">Link to U.S. Department of Labor (DOL)</a></li>
            </ul>        
        <ul>
                <li>CWA-JATC Telecommunications Training Center Located at </li>
                <li>720 Charcot Ave., San Jose, CA 95131</li>
            </ul>
            
            <ul>
                <li>Office: 408.947.0563 </li>
                <li>Fax: 408.448.3711</li>
            </ul>
            <ul>
                <li>Email: cwajatc@yahoo.com</li>
            </ul>
        </footer>
    )
}

export default Footer
