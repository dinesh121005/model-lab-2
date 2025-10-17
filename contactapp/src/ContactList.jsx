const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet. Add one above!</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              <div className="contact-info">
                <strong>{contact.name}</strong>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>
              <div className="contact-actions">
                <button onClick={() => onEdit(contact)}>Edit</button>
                <button onClick={() => onDelete(contact.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
