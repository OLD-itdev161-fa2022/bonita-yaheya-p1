import {useState} from 'react';
import './index.css';
import data from "./mock-data.json";
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

const App = () => {
  
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    interests:'',
    phoneNumber:'',
    email:'',
  });

  const handleAddFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);


  }
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      fullName: addFormData.fullName,
      interests: addFormData.interests,
      phoneNumber: addFormData.phone,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

  };

  return (
  <>
  <Header/>
    
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Interests</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.interests}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>


            </tr>
))}
        </tbody>
      </table>
      <h2>Add new Contact</h2>
      <form onSubmit = {handleAddFormSubmit}>
        <input
        type="text"
        name="fullName"
        required="required"
        placeholder="Please enter a name..."
        onChange={handleAddFormChange}
        />
        <input
        type="text"
        name="interests"
        required="required"
        placeholder="Please enter your interests..."
        onChange={handleAddFormChange}
        />
        <input
        type="text"
        name="phone"
        required="required"
        placeholder="Please enter a phone number..."
        onChange={handleAddFormChange}
        />
        <input
        type="email"
        name="email"
        required="required"
        placeholder="Please enter an email..."
        onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
        </form>
        <Footer />
      </div>
      
      
     
   </>  
  )
}


export default App;
