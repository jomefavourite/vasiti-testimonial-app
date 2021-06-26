import React from 'react';

const Story = () => {
  return (
    <div>
      <h1>Share your amazing story!</h1>

      <form>
        <div>
          <label htmlFor='picture'>Upload your Picture</label>
          <input type='text' name='picture' id='picture' />
        </div>
        <div>
          <div>
            <label htmlFor='fname'>First Name</label>
            <input type='text' name='fname' id='fname' />
          </div>
          <div>
            <label htmlFor='lname'>First Name</label>
            <input type='text' name='lname' id='lname' />
          </div>
        </div>
        <div>
          <label htmlFor='story'>First Name</label>
          <textarea name='story' id='story' cols='30' rows='10'></textarea>
        </div>
        <div>
          <p>What did you interact with Vasiti as?</p>

          <label htmlFor='customer'>
            <input type='radio' name='customer' id='customer' />
            Customer
          </label>

          <label htmlFor='vendor'>
            <input type='radio' name='vendor' id='vendor' />
            Vendor
          </label>
        </div>
      </form>
    </div>
  );
};

export default Story;
