import { useState } from 'react';

function Form() {
  const [formValues, setFormValues] = useState({
    name: ''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    //empêche le rechargement de la page
    e.preventDefault();

    if (formValues.name) {
      alert(`Bonjour ${formValues.name}`);
      setFormValues({
        name: '',
      });
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

export default Form;
