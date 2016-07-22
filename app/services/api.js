import superagent from 'superagent';
// import Utils from './utils';
import config from '../../config/config';

export default {
  getUser: (idToken, userId) => {
    return new Promise((resolve, reject) => {
      superagent
        .get('https://' + config.domain + '/api/v2/users/' + userId)
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + idToken)
        .end(function(err, res) {
          err ? reject(err) : resolve(res.body);
      });
    })
  },

  signUp: (user) => {
    return new Promise((resolve, reject) => {
      superagent
        .post("http://localhost:5000/signup")
        .set('Content-Type', 'application/json')
        .send(user)
        .end(function(err, res) {
          err ? reject(err) : resolve(res.body);
        });
    });
  },

  login: (user) => {
    return new Promise((resolve, reject) => {
      superagent
        .post("http://localhost:5000/login")
        .set('Content-Type', 'application/json')
        .send(user)
        .end(function(err, res) {
          err ? reject(err) : resolve(res.body);
        });
    });
  },

  logout: () => {
    return new Promise((resolve, reject) => {
      superagent
        .get("http://localhost:5000/logout")
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
          err ? reject(err) : resolve(res.body);
        });
    })
  },

  getLocations: () => {
    return new Promise((resolve, reject) => {
      superagent
        .get("http://localhost:5000/locations")
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
          err ? reject(err) : resolve(res.body);
        });
    })
  },

  getSingleLocation: (locationId) => {
    return new Promise((resolve, reject) => {
      superagent
        .get("http://localhost:5000/locations/" + locationId)
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
          err ? reject(err) : resolve(res.body);
        });
    })
  },

  createLocation: (data) => {
    return new Promise((resolve, reject) => {
      superagent
        .post('http://localhost:5000/locations')
        .set('Content-Type', 'application/json')
        .send(data)
        .end(function(err, res) {
          err ? reject(err) : resolve(res.body);
        });
    })
  }
}
