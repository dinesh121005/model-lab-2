import { useState, useEffect } from 'react';

const ContactForm = ({ onSave, editingContact, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    onSave({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    setPhone('');
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>{editingContact ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <div className="form-buttons">
        <button type="submit">{editingContact ? 'Update' : 'Add'}</button>
        {editingContact && <button type="button" onClick={handleCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default ContactForm;
