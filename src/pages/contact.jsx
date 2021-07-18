import React from 'react'
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"

import Close from "../images/svg/close.svg"
import Location from "../images/svg/location.svg"
import Tel from "../images/svg/tel.svg"
import Hp from "../images/svg/handphone.svg"
import Circle from "../images/svg/circle.svg"

import Recaptcha from "react-recaptcha";
import * as yup from 'yup';
import { Formik } from "formik";

const axios = require("axios")
const endpoints = { contact: "/.netlify/functions/sendmail"}

class Contact extends React.Component {

    handleSuccess = () => {
        alert("success")
      }
    
      handleError = msg => {
        alert("fail")
      }
    

    componentDidMount() {
        const script = document.createElement("script");
        script.src =
            "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <Layout location={this.props} >
                <main className="contact">
                    <div className="top">
                        <h4>Contact us and let us help you succeed at your goals!</h4>
                    </div>
                    <div className="middle">
                        <div className="center">
                            <div className="left">
                                <h4>Get In Touch</h4>
                                <div><Location className="location" /><p>  720 Charcot Ave., San Jose, CA 95131</p></div>
                                <div><Tel className="tel" /><p>  (+1) 408.947.0563 </p></div>
                                <div><Hp className="hp" /><p>  (+1) 408.448.3711</p></div>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: "",
                                        message:"",
                                        recaptcha: "",
                                        toEmail: `${process.env.GATSBY_EMAILTO}`,
                                    }}
                                    onSubmit={async (values) => {
                                        let formData = new FormData();

                                        formData.append("name", values.name);
                                        formData.append("email", values.email);
                                        formData.append("message", values.message);
                                        formData.append("toEmail", `${process.env.GATSBY_EMAILTO}`);
                                       
                                        formData.append("recaptcha", values.recaptcha);

                                        // you would submit with fetch for example
                                        // const res = await fetch("posturl", { method: "POST", body: formData });
                                        // Do whatever on the sever
                                        // alert("Form submitted!");
                                        // let { name, email, message } = this.state
                                        let name = formData.get("name")
                                        let email = formData.get("email")
                                        let message = formData.get("message")
                                        let toEmail = formData.get("toEmail")
                                        let recaptcha = values.recaptcha

                                        let data = { name, email, message, toEmail }
                                        console.log(data)

                                        axios.post(endpoints.contact, data)
                                        .then(response => {
                                            if (response.status !== 200) {
                                                this.handleError()
                                            } else {
                                                this.handleSuccess()
                                            }
                                        }).then(response => {
                                            axios.post("https://sheet.best/api/sheets/3fc859a7-e019-42f2-8088-8e94e1172d2f", data)
                                            
                                        })

                                        
                                    }}
                                    validationSchema={yup.object().shape({
                                        name: yup.string().required(),
                                        email: yup.string().email().required(),
                                        // message: yup.string().message(),
                                        recaptcha: yup.string().required(),
                                    })}
                                    render={({ values, errors, touched, handleSubmit, handleChange, setFieldValue }) => (
                                        <form onSubmit={handleSubmit} data-netlify={true}>
                                            <div className="form-group">
                                                <input id="name" name="name" type="text" 
                                                placeholder="Name"
                                                className="form-control"
                                                    value={values.name} onChange={handleChange} />
                                                {errors.name && touched.name && (
                                                    <p>{errors.name}</p>
                                                )}
                                            </div>

                                            <div className="form-group">
                                               
                                                <input id="email" placeholder="Email Address" name="email" type="email" className="form-control"
                                                    value={values.email} onChange={handleChange} />
                                                {errors.email && touched.email && (
                                                    <p>{errors.email}</p>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <textarea id="message" 
                                                placeholder="Write your message here" name="message" type="message" className="form-control"
                                                    value={values.message} onChange={handleChange} />
                                                {errors.message && touched.message && (
                                                    <p>{errors.message}</p>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label>Recaptcha Validation</label>
                                                <Recaptcha
                                                    sitekey="6LfslFYbAAAAALvvAbdBsodshcAdSL9O2UVM6mqd"
                                                    render="explicit"
                                                    theme="light"
                                                    verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                                                    onloadCallback={() => { console.log("done loading!"); }}
                                                />
                                                {errors.recaptcha
                                                    && touched.recaptcha && (
                                                        <p>{errors.recaptcha}</p>
                                                    )}
                                            </div>

                                            <button type="submit" className="submit">submit</button>
                                        </form>
                                    )} />
                            </div>
                            <div className="right">

                                <button className="close-container">
                                    <Close className="close" />
                                </button>
                                <div className="blue">
                                    <Circle className="circle" />
                                </div>
                                <StaticImage src="../images/png/pic.jpeg" alt="background" className="img" />
                            </div>
                        </div>
                    </div>
                    <div className="background">
                        <StaticImage src="../images/png/bg2.png" alt="background" className="img" />
                    </div>
                </main>
            </Layout>
        )
    }
}

export default Contact
