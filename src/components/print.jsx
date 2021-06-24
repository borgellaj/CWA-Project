import React, { Component } from 'react'
// import { connect } from 'react-redux';



export default class CardPrint extends Component {
    render() {

        // const thStyle = {
        //     fontFamily: "Anton",
        //     fontWeight: "normal",
        //     fontStyle: "normal",
        //     color:"blue",
        //   };

        const { 
            date, 
            name,
            DateofBirth,
            male,
            HomeAddress,
            Apt,
            City,
            Zip ,
            HomeTelephone,
            WorkTelephone,
            CellNumber,
            EmailAddress,
            Employer,
            Datestarted,
            Schooling,
            yearGraduated1,
            CollegeCompleted,
            Major,
            yearGraduated2,
            Class,
            whereTaken,
            yearTaken,

        } = this.props
        return (
            <div className="print-container" >
                <div className="head">
                    <h3><strong><span >COMMUNICATIONS WORKERS OF AMERICA</span></strong></h3>
                    <h3><strong><span >Joint Apprenticeship Training Committee</span></strong></h3>
                    <h3><span></span><strong><span >(CWA-JATC)</span></strong></h3>
                </div>

                <p><span>Occupational Title:  Communications Technician</span></p>
                <p><span></span></p>
                <p><span>Date:{date}</span></p>
                <p><span></span></p>
                <p><span>Name: {name} </span></p>
                {/* <p><span >First</span><span >Middle</span><span >Last</span></p> */}
                <p><span></span></p>
                <p><span>Date of Birth: {DateofBirth}</span>
                <span>
                    Male : {(() => {
                            switch (male) {
                            case "true":   return "male  ";
                            case "false" : return "_____";
                            }
                        })()}  
                    Female : {(() => {
                            switch (male) {
                            case "false":   return "female ";
                            case "true":   return "_____";
                            }
                        })()} 
                </span></p>
                <p><span></span></p>
                <p><span>Home Address:{HomeAddress}Apt. #:{Apt}</span></p>
                <p><span></span></p>
                <p><span>City: {City}</span><span>Zip: {Zip}</span></p>
                <p><span></span></p>
                <p><span>Home Telephone: {HomeTelephone} Work Telephone: {WorkTelephone}</span></p>
                <p><span></span></p>
                <p><span>Cell number: {CellNumber} Email address: {EmailAddress}</span></p>
                <p><span></span></p>
                <p><span>Employer: {Employer} </span><span> Date started {Datestarted}</span></p>
                <p><span></span></p>
                <p><span>Schooling: highest level completed GED {Schooling}  Year graduated {yearGraduated1}</span></p>
                <p><span></span></p>
                <p><span>College completed: {CollegeCompleted} Major : {Major} Year graduated : {yearGraduated2}</span></p>
                <p><span></span></p>
                <p><span></span></p>
                <p><span>Vocational training: (night classes, trade, military, etc.) Use back if necessary</span></p>
                <p><span></span></p>
                <p><span>Class: {Class} where taken : {whereTaken} year : {whereTaken}</span></p>
                {/* <p><span>Class:___________________________________ where taken______________ year______</span></p>
                <p><span></span></p> */}
                <p><span>Certifications, if any (FCC Radio License, Novell, CCNA, BICSI, etc.):</span></p>
            </div>
        )
    }
}