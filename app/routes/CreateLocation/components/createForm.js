import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class ContactForm extends Component {
  render() {
    const {fields: {title, description, imageUrl}} = this.props;
    return (
      <form onSubmit={this.props.createLocation}>
        <div>
          <label>Location Title</label>
          <input type="text" placeholder="Location Title" {...title}/>
        </div>
        <div>
          <label>Description</label>
          <textarea type="text" placeholder="Description" {...description}/>
        </div>
        <div>
          <label>Email</label>
          <input type="text" placeholder="Image URL" {...imageUrl}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ContactForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'createLocation',                           // a unique name for this form
  fields: ['title', 'description', 'imageUrl'] // all the fields in your form
})(ContactForm);

export default ContactForm;
