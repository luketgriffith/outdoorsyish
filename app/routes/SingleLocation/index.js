import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleLocation extends Component {
  componentWillMount() {
    let { dispatch, params } = this.props;
    dispatch({
      type: 'GET_SINGLE_LOCATION',
      data: {
        locationId: params.id
      }
    })
  }

  render() {
    return(
      <div>
        <h3>{this.props.location.location}</h3>
        <p>{this.props.location.type}</p>


      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log('single location state: ', state)
  return {
    location: state.Location.location
  }
}

export default connect(mapStateToProps)(SingleLocation);
