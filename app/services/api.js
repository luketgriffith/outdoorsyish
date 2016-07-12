import superagent from 'superagent';
// import Utils from './utils';
// import config from 'config';

export default {
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
  }
}  