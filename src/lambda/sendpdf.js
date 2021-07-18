// Gatsby settings for the environment variables
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  }
  const successCode = 200
  const errorCode = 400
  
  // Connect to our Mailgun API
  const mailgun = require("mailgun-js")
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  })
  
  // Our Netlify function
  export function handler(event, context, callback) {
    let data = JSON.parse(event.body)
    let { name, email, message, toEmail } = data
    let mailOptions = {
      from: `${name} | ${email} <cwajatc@gmail.com>`,
      to: `${toEmail}`,
      replyTo: email,
      subject: 'cwa-jatc applicant',
    //   text: `${message}`,
      html: `<!DOCTYPE html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <!--[if mso]>
        <noscript>
          <xml>
            <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        </noscript>
        <![endif]-->
        <style>
          table,
          td,
          div,
          h1,
          p {
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      
      <body style="margin:0;padding:0;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
          <tr>
            <td align="center" style="padding:0;">
              <table role="presentation"
                style="width:602px;border-collapse:collapse;;border-spacing:0;text-align:left;">
                <tr>
                  <td style="padding:36px 30px 42px 30px;">
                    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td style="padding:0 0 36px 0;color:#153643;">
                            <table>
                              <table style="    margin-left: auto;
                              margin-right: auto;">
      <th style="  vertical-align : middle;text-align:center;">
                                    <h3><strong><span >COMMUNICATIONS WORKERS OF AMERICA</span></strong></h3>
                                    <h3><strong><span >Joint Apprenticeship Training Committee</span></strong></h3>
                                    <h3><span></span><strong><span >(CWA-JATC)</span></strong></h3>
      </th>
      
                            </table>
            
                            <p><span>Occupational Title:  Communications Technician</span></p>
                            <p><span></span></p>
                            <p><span>Date: ${message.date} </span></p>
                            <p><span></span></p>
                            <p><span>Name: ${message.name} </span></p>
                            <p><span></span></p>
                            <p><span>Date of Birth: ${message.DateofBirth} </span>
                            <span>
                                Male : ${(() => {
                                        switch (message.male) {
                                        case "true":   return "male  ";
                                        case "false" : return "_____";
                                        }
                                    })()}  
                                Female : ${(() => {
                                        switch (message.male) {
                                        case "false":   return "female ";
                                        case "true":   return "_____";
                                        }
                                    })()} 
                            </span></p>
                            <p><span></span></p>
                            <p><span>Home Address:${message.HomeAddress} Apt. #: ${message.Apt} </span></p>
                            <p><span></span></p>
                            <p><span>City: ${message.City} </span><span> Zip: ${message.Zip} </span></p>
                            <p><span></span></p>
                            <p><span>Home Telephone: ${message.HomeTelephone} Work Telephone: ${message.WorkTelephone} </span></p>
                            <p><span></span></p>
                            <p><span>Cell number: ${message.CellNumber} Email address: ${message.EmailAddress} </span></p>
                            <p><span></span></p>
                            <p><span>Employer: ${message.Employer} </span><span> Date started ${message.Datestarted}</span></p>
                            <p><span></span></p>
                            <p><span>Schooling: highest level completed GED ${message.Schooling}  Year graduated ${message.yearGraduated1} </span></p>
                            <p><span></span></p>
                            <p><span>College completed: ${message.CollegeCompleted} Major : ${message.Major} Year graduated : ${message.yearGraduated2} </span></p>
                            <p><span></span></p>
                            <p><span></span></p>
                            <p><span>Vocational training: (night classes, trade, military, etc.) Use back if necessary</span></p>
                            <p><span></span></p>
                            <p><span>Class: ${message.Class} where taken : ${message.whereTaken} year : ${message.whereTaken}</span></p>
                            <p><span>Certifications, if any (FCC Radio License, Novell, CCNA, BICSI, etc.): ${message.certification} </span></p>
                            </table>
                        </td>
                      </tr>
                      <tr>
      
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
      
                </tr>
              </table>
            </td>
          </tr>
        </table>
        </td>
        </tr>
        </table>
      </body>
      
      </html>
      `
    }
  
    // Our MailGun code
    mg.messages().send(mailOptions, function(error, body) {
      if (error) {
        callback(null, {
          statusCode: errorCode,
          headers,
          body: JSON.stringify(error),
        })
      } else {
        callback(null, {
          statusCode: successCode,
          headers,
          body: JSON.stringify(body),
        })
      }
    })
  }