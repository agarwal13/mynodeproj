export prod_config = {
    production: {
    session: {
      key: 'the.express.session.id',
      secret: 'something.super.secret'
    },
    database: 'mongodb://<user>:<pwd>@apollo.modulusmongo.net:27017/db',
    twitter: {
      consumerKey: 'consumer Key',
      consumerSecret: 'consumer Secret',
      callbackURL: 'http://yoururl.com/auth/twitter/callback'
    }
  }
}