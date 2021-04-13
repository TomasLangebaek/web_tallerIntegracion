import { useState } from 'react';
import Jobs from './Jobs';

const useOfferForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    var url = '/offers';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(inputs), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response));
    Jobs.forceUpdate();
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return {
    handleSubmit,
    handleInputChange,
  };
};

export default useOfferForm;
