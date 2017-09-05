const prod = require('./prod.json');
var config = {
  production: {
    author: "Narendra",
    env: "prod",
    lang: "nodejs"
  },
  default: {
    author: "Narendra",
    env: "default",
    lang: "nodejs"
  }
}

exports.get = function get(env) {
  if (prod.exists) return prod;
  else return config[env] || config.default;
}