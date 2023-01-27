import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Contact.css';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha'

const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1421.9045677741533!2d28.050394312627127!3d-26.099731795514508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95733078e3703f%3A0x5c27913c1abd4efe!2s77%20Grayston%20Dr%2C%20Morningside%2C%20Sandton%2C%202057!5e0!3m2!1sen!2sza!4v1621199802241!5m2!1sen!2sza" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'; 

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
};


const CustomTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return(
    <>
      {window.scrollTo({ top: 0, left: 100, behavior: 'smooth' })}
      {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>) : null}
      <input {...field}{...props}/>
    </>
  )
}
const CustomEmailInput = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return(
    <>
      {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>) : null}
      <input {...field}{...props}/>
    </>
  )
}
const CustomMessageInput = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return(
    <>
      {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>) : null}
      <textarea {...field}{...props}></textarea>
    </>
  )
}

export default function Contact () {

  const sendMail = (e) => {
    emailjs.send('envyent_gmail', 'envyent_template', 
    e, 
    'user_Qs1wt9UU2uD35HidDNGxP')
    .then(() => {
      alert(JSON.stringify('Sent! Thank you for your message, we will get back to you using the provided email address.'));
    }).catch(() => {
      alert(JSON.stringify('Error sending email, please try again later.'));
    })
  }
  
  return(

    <>
    <Helmet>
      <title>Contact | Envy Enterprises (Pty) Ltd.</title>
    </Helmet>
    <div className='contact-compensation'></div>
    <div className='contact-wrapper'>
        <section id="contact">
          <div className="social">
            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
            <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
            <Link to="#"><i class="fab fa-youtube"></i></Link>
          </div>

          <div className="contact-box">
            <div className="c-heading">
              <h1>Get In Touch</h1>
              <p>Contact Us Regarding a Question Or Issues</p>
            </div>

            <Formik
              validateOnMount
              initialValues={{
                fullname: '',
                email: '',
                message: '',
                recaptcha: '',
              }}
              validationSchema={Yup.object(
                {
                  fullname: Yup.string().min(3, '*Can\'t be less than 2 characters').max(50, '*Can\'t be more than 50 characters').required('*Name required'),
                  email: Yup.string().email('*Email is invalid').required('*Email required'),
                  message: Yup.string().max(240, '*Max characters (240) reached').required('*Message required'),
                  recaptcha: Yup.string().required()
                }
              )}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  resetForm();
                  window.grecaptcha.reset();
                  setSubmitting(false);
                }, 3000);
                sendMail(values);
              } }

            >
              {props => (
                <div className="c-inputs">
                  {/* TODO --> onSubmit={sendEmail}  */}
                  <Form>
                    <CustomTextInput type="text" placeholder="Full Name" name="fullname" />
                    <CustomEmailInput type="email" placeholder="example@gmail.com" name="email" />
                    <CustomMessageInput type="text" placeholder="Write Message" name="message" />
                    {/* <textarea type="text" placeholder="Write message" name="message" required="required"></textarea>  */}
                    <div className='recap'>
                    <ReCAPTCHA
                      sitekey="6LdHd_YeAAAAAAZ_g5WN2b33R31LQ_got7FSGL-5"
                      onChange={(value) => {
                        // console.log("$$$$", props.isSubmitting, value);
                        props.setFieldValue("recaptcha", value);
                        props.setSubmitting(false);
                      }}
                    />
                    </div>
                    <button type='submit'>{props.isSubmitting ? 'SENDING...' : 'SEND'}</button>
                  </Form>
                </div>)}

            </Formik>

          </div>
          <div className="map">
            <Iframe iframe={iframe} />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.5252574812218!2d74.31603229143637!3d31.46779655679461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906abd2d8f2db%3A0x2d4bd93a1eb25b41!2sArfa%20Technologies!5e0!3m2!1sen!2s!4v1596774150754!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>	 */}
          </div>
        </section>
      </div></>
  )};