
import React, { Component } from 'react'
import ReactToPrint from "react-to-print";
import CardPrint from '../print';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import {
    submitAction
} from './action';
import { connect } from 'react-redux';
import TextfieldWrapper from '../form-ui/textfield';
import { Grid, Typography, Button } from '@material-ui/core';
import DateTimePicker from '../form-ui/dateTime';
import ButtonWrapper from '../form-ui/button';
import ButtonPrint from '../form-ui/printButton';
import SelectWrapper from '../form-ui/Select';

// import ReCaptcha, { Loader } from "@pittica/gatsby-plugin-recaptcha"
import * as yup from 'yup';
import Recaptcha from "react-recaptcha";
class Card extends Component {
    constructor(props, context) {
        super(props);
        this.state = { value: '' };
        // Loader()
    }

    // verifyCallback = (token) => {
    //     yup.object().shape({
    //         name: yup.string().required(),
    //         email: yup.string().email().required(),
    //         recaptcha: yup.string().required(),})
    // }

    componentDidMount() {
        const script = document.createElement("script");
        script.src =
          "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }


    render() {
        const {
            date,
            name,
            DateofBirth,
            male,
            HomeAddress,
            Apt,
            City,
            Zip,
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
            submitAction,
            recaptcha, } = this.props

        return (
            <div>
                <div style={{ display: 'none' }}>
                    <CardPrint
                        date={date}
                        name={name}
                        male={male}
                        HomeAddress={HomeAddress}
                        Apt={Apt}
                        City={City}
                        Zip={Zip}
                        HomeTelephone={HomeTelephone}
                        WorkTelephone={WorkTelephone}
                        CellNumber={CellNumber}
                        EmailAddress={EmailAddress}
                        Employer={Employer}
                        Datestarted={Datestarted}
                        Schooling={Schooling}
                        yearGraduated1={yearGraduated1}
                        CollegeCompleted={CollegeCompleted}
                        Major={Major}
                        yearGraduated2={yearGraduated2}
                        Class={Class}
                        whereTaken={whereTaken}
                        yearTaken={yearTaken}
                        DateofBirth={DateofBirth}
                        ref={el => (this.componentRef = el)} /></div>
                <div>

                    <Formik
                        initialValues={{
                            date: '',
                            name: '',
                            DateofBirth: '',
                            male: false,
                            HomeAddress: '',
                            Apt: '',
                            City: '',
                            Zip: '',
                            HomeTelephone: '',
                            WorkTelephone: '',
                            CellNumber: '',
                            EmailAddress: '',
                            Employer: '',
                            Datestarted: '',
                            Schooling: '',
                            yearGraduated1: '',
                            CollegeCompleted: '',
                            Major: '',
                            yearGraduated2: '',
                            Class: '',
                            whereTaken: '',
                            yearTaken: '',
                            recaptcha: "",
                        }}
                        onSubmit={fields => {
                            // console.log(fields)
                            let formData = new FormData();
                            submitAction(fields)

                            formData.append("recaptcha", fields.recaptcha);
                        }}
                        // validationSchema={yup.object().shape({
                        //     name: yup.string().required(),
                        //     email: yup.string().email().required(),
                        //     // recaptcha: yup.string().required(),
                        //   })}
                        
                        render={({ errors, status, touched, setFieldValue, }) => (
                            <Form>
                                <main className="application">
                                    <Grid container spacing={2} justify="center" alignItems="center">
                                        {/* <div className="date">
                                        <label htmlFor="date">Date :</label>
                                        <input type="date" name="date" />
                                    </div> */}
                                        <Grid item xs={10}>
                                            <DateTimePicker
                                                name="date"
                                                label="Date"
                                            />
                                        </Grid>

                                        <Grid container item spacing={2} xs={12} justify="center" alignItems="center">
                                            <Grid item xs={10} >
                                                <Typography>
                                                    Your details
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="name"
                                                    label="Name"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <DateTimePicker
                                                    name="DateofBirth"
                                                    label="Date of Birth"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <SelectWrapper
                                                    name="male"
                                                    label="Male"
                                                    options={
                                                        {
                                                            true: "male",
                                                            false: "female"
                                                        }
                                                    }
                                                />
                                            </Grid>
                                        </Grid>
                                        
                                        <Grid container item spacing={2} xs={12} justify="center" alignItems="center">
                                            <Grid item xs={10}>
                                                <Typography>
                                                    Address
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={10} >
                                                <TextfieldWrapper
                                                    name="HomeAddress"
                                                    label="Home Address"
                                                />
                                            </Grid>
                                            <Grid item xs={10} >
                                                <TextfieldWrapper
                                                    name="Zip"
                                                    label="Zip"
                                                />
                                            </Grid  >
                                            <Grid item xs={10} >
                                                <TextfieldWrapper
                                                    name="Apt"
                                                    label="Apt"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="City"
                                                    label="City"
                                                />
                                            </Grid>
                                        </Grid>
                                        
                                        <Grid container spacing={2} item xs={12} justify="center" alignItems="center">
                                        <Grid item xs={10}>
                                            <Typography>
                                                Telephone
                                            </Typography>
                                        </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="HomeTelephone"
                                                    label="Home Telephone"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="WorkTelephone"
                                                    label="Work Telephone"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="CellNumber"
                                                    label="Cell number"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="EmailAddress"
                                                    label="Email address"
                                                />
                                            </Grid>
                                        </Grid>
                                       
                                        <Grid container item spacing={2} xs={12} justify="center" alignItems="center">
                                        <Grid item xs={10}>
                                            <Typography>
                                                Past Employment
                                            </Typography>
                                        </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="Employer"
                                                    label="Employer"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <DateTimePicker
                                                    name="DateStarted"
                                                    label="Date started"
                                                />
                                            </Grid>
                                        </Grid>
                                        
                                        <Grid container item spacing={2} xs={12} justify="center" alignItems="center">
                                        <Grid item xs={10}>
                                            <Typography>
                                                School
                                            </Typography>
                                        </Grid>
                                            <Grid item xs={10}>
                                                <SelectWrapper
                                                    name="Schooling"
                                                    label="Schooling"
                                                    options={{
                                                        9:"9",
                                                        10:"10",
                                                        11:"11",
                                                        12:"12"
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <DateTimePicker
                                                    name="yeargraduated1"
                                                    label="Year Graduated"
                                                />
                                            </Grid>
                                        </Grid>
                                       
                                        <Grid container spacing={2} item xs={12} justify="center" alignItems="center">
                                        <Grid item xs={10}>
                                            <Typography>
                                                College
                                            </Typography>
                                        </Grid>
                                            <Grid item xs={10}>
                                                <SelectWrapper
                                                    name="CollegeCompleted"
                                                    label="College Completed"
                                                    options={{
                                                        13:"13",
                                                        14:"14",
                                                        15:"15",
                                                        16:"16"
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="Major"
                                                    label="Major"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <DateTimePicker
                                                    name="yeargraduated2"
                                                    label="Year Graduated"
                                                />
                                            </Grid>
                                        </Grid>
                                        
                                        <Grid container spacing={2} item xs={12} justify="center" alignItems="center">
                                        <Grid item xs={10}>
                                            <Typography>
                                                Vocational training: (night classes, trade, military, etc.) Use back if necessary
                                            </Typography>
                                        </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="Class"
                                                    label="Class"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <TextfieldWrapper
                                                    name="whereTaken"
                                                    label="Where Taken"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <DateTimePicker
                                                    name="yearTaken"
                                                    label="Year Taken"
                                                />
                                            </Grid>
                                        </Grid>
                                        
                                        <Grid container item xs={10} spacing={2} justify="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <Typography>
                                                Certifications, if any (FCC Radio License, Novell, CCNA, BICSI, etc.):
                                            </Typography>
                                        </Grid>
                                            <Grid item  xs={6} style={{textAlign:"-webkit-center"}}>
                                                <Recaptcha
                                                    sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
                                                    render="explicit"
                                                    theme="light"
                                                    verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                                                    onloadCallback={() => { console.log("done loading!"); }}
                                                />
                                                {errors.recaptcha
                                                    && touched.recaptcha && (
                                                        <p>{errors.recaptcha}</p>
                                                    )}
                                            </Grid>
                                            <Grid container item xs={10} spacing={2}>
                                            <Grid item xs={6}>
                                                <ButtonWrapper>
                                                    Submit Form
                                                </ButtonWrapper>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <ReactToPrint
                                                    trigger={() => <Button variant='contained'
                                                        color='primary'
                                                        fullWidth={true}
                                                    >Print</Button>}
                                                    content={() => this.componentRef}
                                                />
                                            </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </main>
                            </Form>
                        )}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    date: state.date,
    name: state.name,
    DateofBirth: state.DateofBirth,
    male: state.male,
    HomeAddress: state.HomeAddress,
    Apt: state.Apt,
    City: state.City,
    Zip: state.Zip,
    HomeTelephone: state.HomeTelephone,
    WorkTelephone: state.WorkTelephone,
    CellNumber: state.CellNumber,
    EmailAddress: state.EmailAddress,
    Employer: state.Employer,
    Datestarted: state.Datestarted,
    Schooling: state.Schooling,
    yearGraduated1: state.yearGraduated1,
    CollegeCompleted: state.CollegeCompleted,
    Major: state.Major,
    yearGraduated2: state.yearGraduated2,
    Class: state.Class,
    whereTaken: state.whereTaken,
    yearTaken: state.yearTaken,

});

const mapDispatchToProps = (dispatch) => ({
    submitAction: (data) => dispatch(submitAction(data))

});
export default connect(mapStateToProps, mapDispatchToProps)(Card);