import React from 'react';
import {FooterSection, FooterGrid, FooterContent} from '../styles/FooterStyle';
import {Container} from '../globalStyles';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <div>
            <h2>Be a member of our community 🎉</h2>
            <p>
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </p>
            <form>
              <div>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='enter your email address'
                />
                <button>Subscribe</button>
              </div>
            </form>
          </div>
          <img src='./images/footer-img.png' alt='' />
        </FooterContent>

        <FooterGrid>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href='/'>About us</a>
              </li>
              <li>
                <a href='/'>Term of Use</a>
              </li>
              <li>
                <a href='/'>Privacy Policy</a>
              </li>
              <li>
                <a href='/'>Press & Media</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li>
                <a href='/'>Marketplace</a>
              </li>
              <li>
                <a href='/'>Magazine</a>
              </li>
              <li>
                <a href='/'>Seller</a>
              </li>
              <li>
                <a href='/'>Wholesale</a>
              </li>
              <li>
                <a href='/'>Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Careers</h4>
            <ul>
              <li>
                <a href='/'>Become a Campus Rep</a>
              </li>
              <li>
                <a href='/'>Become a Vasiti Influencer</a>
              </li>
              <li>
                <a href='/'>Become a Campus writer</a>
              </li>
              <li>
                <a href='/'>Become an Affiliate</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href='/'>Contact us</a>
              </li>
              <li>
                <a href='/'>Partner with us</a>
              </li>
              <li>
                <a href='/'>Advertise with us</a>
              </li>
              <li>
                <a href='/'>Help/FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Join our community</h4>
            <ul>
              <li>
                <a href='/'>Contact us</a>
              </li>
              <li>
                <a href='/'>Partner with us</a>
              </li>
              <li>
                <a href='/'>Advertise with us</a>
              </li>
              <li>
                <a href='/'>Help/FAQs</a>
              </li>
            </ul>
            <p>Email Newsletter</p>
          </div>
        </FooterGrid>
      </Container>
    </FooterSection>
  );
};

export default Footer;
