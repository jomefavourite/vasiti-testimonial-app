import {useState} from 'react';
import {GlobalStyles} from '../globalStyles';
import {
  SubmitBtn,
  Form,
  StoryContainer,
  StoryName,
  CustomerVendor,
  Error,
} from '../styles/StoryStyle';

const Story = ({addReview}) => {
  const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [story, setStory] = useState('');
  const [customerVendor, setCustomerVendor] = useState('');
  const [error, setError] = useState('none');

  const handleSubmit = e => {
    e.preventDefault();

    if (
      image === '' ||
      firstName === '' ||
      lastName === '' ||
      story === '' ||
      customerVendor === ''
    ) {
      setTimeout(() => {
        setError('block');
      }, 20);

      return false;
    }

    addReview({image, firstName, lastName, customerVendor, story});

    setImage('');
    setFirstName('');
    setLastName('');
    setStory('');
  };
  return (
    <StoryContainer>
      <GlobalStyles />

      <Form onSubmit={e => handleSubmit(e)}>
        <Error style={{display: `${error}`}}>Please fill all inputs</Error>

        <h1>Share your amazing story!</h1>
        <div>
          <label htmlFor='picture'>Upload your Picture</label>
          <input
            value={image}
            type='text'
            name='picture'
            id='picture'
            placeholder='Enter a link to an image'
            onChange={e => setImage(e.target.value)}
          />
        </div>
        <StoryName>
          <div>
            <label htmlFor='fname'>First Name</label>
            <input
              value={firstName}
              type='text'
              name='fname'
              id='fname'
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='lname'>Last Name</label>
            <input
              value={lastName}
              type='text'
              name='lname'
              id='lname'
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </StoryName>
        <div>
          <label htmlFor='story'>Share your story</label>
          <textarea
            value={story}
            name='story'
            id='story'
            cols='20'
            rows='10'
            onChange={e => setStory(e.target.value)}
          ></textarea>
        </div>
        <CustomerVendor>
          <p>What did you interact with Vasiti as?</p>

          <div>
            <label htmlFor='customer'>
              <input
                onChange={() => setCustomerVendor('Customer')}
                type='radio'
                name='interact'
                id='interact'
              />
              Customer
            </label>
            <label htmlFor='customer'>
              <input
                onChange={() => setCustomerVendor('Vendor')}
                type='radio'
                name='interact'
                id='interact'
              />
              Vendor
            </label>
          </div>
        </CustomerVendor>

        <SubmitBtn type='submit'>Share your story!</SubmitBtn>
      </Form>
    </StoryContainer>
  );
};

export default Story;
