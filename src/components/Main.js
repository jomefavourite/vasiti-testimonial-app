import React from 'react';
import {
  Experience,
  ExperienceContent,
  CustomerReview,
  Experience2,
  ExperienceContent2,
} from '../styles/MainStyles';
import {Container} from '../globalStyles';
import {firstReview, secondReview} from '../review';

const Main = () => {
  return (
    <main>
      <Experience>
        <ExperienceContent>
          <div>
            <h2>Oby’s Experience</h2>
            <button>CUSTOMER</button>
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <a href='#' className='share'>
              Share your own story!
            </a>
          </div>
          <picture>
            <source
              media='(min-width: 477.49px)'
              srcSet='./images/experience-des.png'
            />
            <img src='./images/experience-mob.png' alt='' />
          </picture>
        </ExperienceContent>
      </Experience>

      <CustomerReview>
        {firstReview.map((data, i) => {
          return (
            <>
              <section key={i}>
                <Container>
                  <img src={data.image} alt={data.alt} />
                  <h3>{data.name}</h3>
                  <div>
                    <p>{data.location}</p>
                    <button>{data.type}</button>
                  </div>
                  <p>{data.review}</p>
                </Container>
              </section>
            </>
          );
        })}
      </CustomerReview>

      <Experience2>
        <ExperienceContent2>
          <picture>
            <source
              media='(min-width: 477.49px)'
              srcSet='./images/victoria-experience-des.png'
            />
            <img src='./images/victoria-experience-mob.png' alt='' />
          </picture>
          <div>
            <h3>Victoria’s Experience</h3>
            <button>VENDOR</button>
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <a href='/' className='share'>
              Share your own story!
            </a>
          </div>
        </ExperienceContent2>
      </Experience2>

      <CustomerReview>
        {secondReview.map((data, i) => {
          return (
            <>
              <section key={i}>
                <Container>
                  <img src={data.image} alt={data.alt} />
                  <h3>{data.name}</h3>
                  <div>
                    <button>{data.type}</button>
                  </div>
                  <p>{data.review}</p>
                </Container>
              </section>
            </>
          );
        })}
      </CustomerReview>
    </main>
  );
};

export default Main;
