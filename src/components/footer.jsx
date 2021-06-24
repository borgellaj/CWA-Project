import React from 'react'

const Footer = ({location}) => {
    // console.log(location.location)
    return (
        <footer className={location.location.pathname === '/' ? `homefooter footer` : `footer`} >
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
