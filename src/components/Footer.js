import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
//import { useForm } from 'react-hook-form';

const ToTop = () => {
   window.scrollTo({ top: 0, left: 100, behavior: 'smooth'});
};

const Footer = () => {
    // const { handleSubmit,register, errors } = useForm();
    // const onSubmit = (data) => console.log({data});
    // const ErrorMessage = ({ message }) => (
    //     <p className="text-sm px-3 mt-1 text-red-500 inline-block">
    //     {message}</p>
    // );
    // const SuccessMessage = () => (
    //     <p className="text-sm px-3 bg-green-100 border rounded-md border-success text-success">
    //     You have successfully subscribed.</p>
    // );

    return (
      <>
      <footer>
        
        <div className='footer-container'>
        {/*Subscription form commented out*/}
        {/*
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Sign up for a newsletter to get notified about any news on e-Health.
            </p>
            <div className="input-areas">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" name='email'
                     placeholder='Your email' className="footer-input"
                     {...register('email',{
                         required: true,
                         pattern: {
                            value: /^[a-z0-9._%++-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Please enter a valid email.",
                        },
                     })}/>
                     {errors?.email && <ErrorMessage message={errors.email.message}/>}
                     <ErrorMessage/>
                    <Button buttonStyle='btn--outline' type="submit">Subscribe</Button>
                </form>
            </div>
        </section>
    */}
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Products</h2>
              <Link to='/portfolio'>Subsidiaries</Link>

            </div>

            <div className='footer-link-items'>
              <h2>Support</h2>
              <Link to='/contact' onClick={ToTop}>Contact Us</Link>
              <a href='https://sacoronavirus.co.za' target='_blank' rel="noopener noreferrer">Covid-19</a>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Company</h2>
              <Link to='#'>Legal</Link>
              <Link to='#'>Privacy Policy</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Resources </h2>
              <Link to='#'>News</Link>
              <Link to='#'>e-Health</Link>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              {/* TODO -> Configure button */}
              <Button onClick={ToTop}>
                To top
              </Button>
            </div>
            <small className='website-rights'>Invidum Technologies (Pty) Ltd. © 2021</small>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
                to='#'
                //target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook-f' />
              </Link>
              <Link
                className='social-icon-link instagram'
                to='#'
                //target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link youtube'
                to='#'
                //target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='#'
                //target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <Link
                className='social-icon-link linkedin'
                to='#'
                //target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
      </footer>
      </>

    )
}

export default Footer
