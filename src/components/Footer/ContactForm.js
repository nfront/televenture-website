import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import styles from './contactForm.module.scss';

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`;

const Button = styled.div`
  background: ${props => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      showModal: false,
    };
  }

  handleInputChange = event => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error));
    event.preventDefault();
  };

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { name, showModal, email, phone, message } = this.state;
    return (
      <form
        className={styles.form}
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <div className={styles.contactDetails}>
          <label
            className={classNames(styles.nameLabel, {
              [styles.inputLabel]: true,
              [styles.hasValue]: !!name,
            })}
          >
            <input
              autoComplete="off"
              className={styles.name}
              name="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={this.handleInputChange}
              required
            />
            <div className={styles.inputCover}>Name</div>
          </label>
          <label
            className={classNames(styles.inputLabel, {
              [styles.hasValue]: !!email,
            })}
          >
            <input
              autoComplete="off"
              className={styles.email}
              name="email"
              type="email"
              placeholder="Email *"
              value={email}
              onChange={this.handleInputChange}
              required
            />
            <div className={styles.inputCover}>Email *</div>
          </label>
        </div>
        <label
          className={classNames(styles.phone, {
            [styles.inputLabel]: true,
            [styles.hasValue]: !!phone,
          })}
        >
          <input
            name="phone"
            type="phone"
            placeholder="Phone"
            value={phone}
            onChange={this.handleInputChange}
            required
          />
          <div className={styles.inputCover}>Phone No.</div>
        </label>
        <label
          className={classNames(styles.textarea, {
            [styles.inputLabel]: true,
            [styles.hasValue]: !!message,
          })}
        >
          <textarea
            name="message"
            placeholder="Write your query here"
            value={message}
            onChange={this.handleInputChange}
            required
          />
          <div
            className={classNames(styles.inputCover, {
              [styles.textareaCover]: true,
            })}
          >
            Write your query here
          </div>
        </label>
        <button className={styles.submit} name="submit" type="submit">
          Send
        </button>

        <Modal visible={showModal}>
          <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
          <Button onClick={this.closeModal}>Okay</Button>
        </Modal>
      </form>
    );
  }
}

export default ContactForm;
