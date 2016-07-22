import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from '../../services/map';

class SingleLocation extends Component {
  componentWillMount() {
    let { dispatch, params } = this.props;
    let idToken = localStorage.getItem('id_token');
    dispatch({
      type: 'GET_SINGLE_LOCATION',
      data: {
        locationId: params.id,
        idToken: idToken
      }
    })
  }

  render() {
    let content;
    if(this.props.location && this.props.user) {
      content = (<div>
        <img src={this.props.location.imageUrl} />
        <h3>{this.props.location.title}</h3>
        <p>{this.props.location.description}</p>
        <div>
          Posted By: {this.props.user.email}
        </div>
        <Map />

      </div>)
    } else {
      content = <div>Loading...</div>
    }
    return(
      <div>
        {content}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('single location state: ', state)
  return {
    location: state.location.location.location,
    user: state.location.location.user
  }
}

export default connect(mapStateToProps)(SingleLocation);
