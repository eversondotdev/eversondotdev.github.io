// components/ContactForm.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then(
        () => {
          setSubmitStatus('Message sent successfully!');
          setForm(initialFormState);
        },
        error => {
          setSubmitStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />

        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />

        <select name="subject" value={form.subject} onChange={handleChange} required>
          <option value="">Subject...</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>

        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />

        <input type="submit" value="Send" />
      </form>
      {submitStatus && <p>{submitStatus}</p>}
    </div>
  );
};

export default ContactForm;
