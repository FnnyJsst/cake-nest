import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [formValues, setFormValues] = useState({
    name: ''
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.name) {
      setFormValues({
        name: '',
      });
      navigate('/order');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
   
    </>
  );
}

export default LoginForm;
