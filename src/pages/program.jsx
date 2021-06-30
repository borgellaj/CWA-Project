import { Link } from 'gatsby'
import React from 'react'

import Layout from "../components/layout"
import Both from "../images/svg/both.svg"
const Program = (location) => {
    return (
        <Layout location={location}>

            <div className="program">
                <h1>ABOUT PROGRAM </h1>
                <div className="box">
                    <p>Welcome to the CWA District Nine Telecommunications Apprenticeship Program. Sponsored by the Communications Workers of America (CWA) and the American Communications Contractors Association (ACCA) Joint Apprenticeship Training
                    Committee (CWA/ACCA-JATC).</p>
                    <br />
                    <p>Our Program 3 year term and is approved by the
                    California Department of Industrial Relations, Division of Apprenticeship Standards
                    (DAS) and the U.S. Department of Labor (DOL). It combines 4,500 hours of training
                    on the job with related and supplemental instruction in the classroom.
                    Chabot/Las Positas Community College District is our partner in the program.</p>
                    <br />
                    <p>
                        The Instruction, supplementing the training on the job, gives apprentices a
                        comprehensive understanding of the theoretical aspects of their work.
                        Related instruction is one of the fundamental features of apprenticeship and
                        has been developed and accepted as standard practice in every trade. </p>
                     <br />
                     <p>
                        The Program requires students to attend classes for at least 108 hours
                        per year (2 semesters). In class apprentices learn the theories and hands
                        on applications and each day on the job they learn the practical
                        applications under the supervision of skilled workers.
                    </p>
                    <br />
                    
                    <h2>PROGRAM CONSIST OF THE FOLLOWING AND SKILLS</h2>
                    <br />
                    <ol>
                        <li>OSHA-30 (Cert.)</li>
                        <li>Lock Out/Tag Out (Cert.)</li>
                        <li>Confined Space(Cert.)</li>
                        <li>First Aid/ CPR (Red Cross)</li>
                        <li>General Safety</li>
                        <li>Structured Cabling (Placing, Pulling and terminating UTP Cabling)</li>
                        <li>Color Codes</li>
                        <li>TIA/EIA</li>
                        <li>Fiber Optics</li>
                        <li>National Electrical Code</li>
                        <li>Fire Stopping</li>
                        <li>Paging Systems</li>
                        <li>Closed Antenna Systems(CATV)</li>
                        <li>Distributed Antenna Systems(DAS)</li>
                        <li>Computer Literacy</li>
                        <li>Computer Networking</li>
                        <li>Network Video/Closed Circuit Television(CCTV)</li>
                        <li>Intrusion Systems</li>
                        <li>Access Control Systems</li>
                        <li> Blueprint Reading</li>
                        <li>Audio Visual</li>
                        <li>Grounding and Bonding</li>
                    </ol>
                    <div className="logo-container">
                        <Both className="logo" />
                        <div className="application" ><Link to="/application" > Application</Link></div>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Program
