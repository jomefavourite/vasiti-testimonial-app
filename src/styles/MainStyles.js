import styled from 'styled-components';

export const Experience = styled.section`
  background: rgba(34, 34, 34, 1);
  color: #fff;
`;

export const Experience2 = styled(Experience)`
  background: rgba(255, 248, 245, 1);
  color: #242120;
`;

export const ExperienceContent = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 0;
  padding: 2rem 0;

  > div {
    padding: 5rem 2rem 3rem;

    p {
      margin: 1rem 0;
      letter-spacing: 0.02em;
      line-height: 150%;
      font-size: 16px;
    }
  }

  button {
    border: 1px solid #fff;
    border-radius: 4px;
    background: transparent;
    color: #fff;
    padding: 0.5em;
    margin-top: 0.5rem;
  }

  img {
    /* position: absolute; */
    display: block;
    width: 100%;
    margin: auto;
    margin-top: 15%;
  }

  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    > div {
      order: 1;
      align-content: center;
      margin: auto;
      padding-top: 0;

      p {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1200px) {
    img {
      transform: translateY(35px);
      margin-top: 0;
    }
  }
`;

export const ExperienceContent2 = styled(ExperienceContent)`
  .share {
    color: rgba(255, 92, 0, 1);
  }
`;

export const CustomerReview = styled.div`
  display: grid;
  grid-gap: 5rem;
  margin: 4rem auto 8rem;
  max-width: 1200px;

  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
