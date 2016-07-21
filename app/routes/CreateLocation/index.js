import React, { Component } from 'react'
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import CreateForm from './components/createForm';

class CreateLocation extends Component {
  constructor(props) {
    super(props);

    this.createLocation = this.createLocation.bind(this);
  }

  createLocation(e) {
    e.preventDefault();
    let { dispatch, form } = this.props;
    let data = {
      title: form.createLocation.title.value,
      description: form.createLocation.description.value,
      imageUrl: form.createLocation.imageUrl.value
    }
    dispatch({
      type: 'CREATE_LOCATION',
      location: data
    })
  }

  render() {


    return(

      <div>Create Location
        <CreateForm
          createLocation={this.createLocation}
        />
      </div>

    )
  }
}

function mapStateToProps(state){
  console.log('state from create form: ', state)
  return {
    form: state.form,
    user: state.auth.userData
  }
}

export default connect(mapStateToProps)(CreateLocation)
