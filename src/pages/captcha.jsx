import React from 'react';
// import { render } from 'react-dom';
import { Formik } from "formik";
// import Dropzone from "react-dropzone";
import Recaptcha from "react-recaptcha";
import * as yup from 'yup';


// import Thumb from "./Thumb";

const dropzoneStyle = {
  width: "100%",
  height: "auto",
  borderWidth: 2,
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: 5,
}

class CaptchaPage extends React.Component { 
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
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            email: "",
            photo: null,
            attachments: [],
            recaptcha: "",
          }}
          onSubmit={async (values) => {
            let formData = new FormData();

            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("photo", values.photo);
            
            for (let i = 0; i <= values.attachments.length; i++) {
              formData.append(`attachments[${i}]`, values.attachments[i]);
            }

            formData.append("recaptcha", values.recaptcha);

            // you would submit with fetch for example
            // const res = await fetch("posturl", { method: "POST", body: formData });
            // Do whatever on the sever
            alert("Form submitted!");
            console.log(formData.get("name"));
            console.log(formData.get("email"));
            console.log(formData.get("photo"));
            console.log(formData.get("recaptcha"));
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            recaptcha: yup.string().required(),
          })}
          render={({ values, errors, touched, handleSubmit, handleChange, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" className="form-control"
                  value={values.name} onChange={handleChange} />
                {errors.name && touched.name && (
                  <p>{errors.name}</p>
                )}
              </div>

              <div className="form-group">
                <label for="email">E-mail</label>
                <input id="email" name="email" type="email" className="form-control"
                  value={values.email} onChange={handleChange} />
                {errors.email && touched.email && (
                  <p>{errors.email}</p>
                )}
              </div>

             

              <div className="form-group">
                <label>Recaptcha Validation</label>
                <Recaptcha
                  sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
                  render="explicit"
                  theme="dark"
                  verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                  onloadCallback={() => { console.log("done loading!"); }}
                />
                {errors.recaptcha
                  && touched.recaptcha && (
                    <p>{errors.recaptcha}</p>
                  )}
              </div>

              <button type="submit" className="btn btn-primary">submit</button>
            </form>
          )} />
      </div>
    );
  }
};

export default CaptchaPage