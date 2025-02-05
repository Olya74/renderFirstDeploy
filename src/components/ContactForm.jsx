import  useUserContext from '../contexts/UserContext';
import {useNavigate} from 'react-router-dom';
function ContactForm() {
  const {user,setUser} = useUserContext();
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('data', data);
    setUser(data);
    navigate('/');
    e.target.reset();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:{" "}
        <input
          type="text"
          required
          placeholder="Name"
          name="name"
        />
      </label>
      <br />
      <br />
      <label htmlFor="email">
        Email:{" "}
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          
        />
      </label>
      <br />
      <br />
      <label htmlFor="message">About you: </label> <br />
      <textarea
        name="message"
        id="message"
        required
      ></textarea>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default ContactForm;
