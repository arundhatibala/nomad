//config for oauth2 with credentials

const baseURL = "http://localhost:5000"
require("dotenv").config

module.exports = {
  JWTsecret: 'mysecret',
  baseURL: baseURL,
  port: 5000,
  oauth2Credentials: {
    client_id: "660327380986-0nlbh486534v1b8cafmvjt3icn38t7k3.apps.googleusercontent.com",
    project_id: "Nomad", 
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "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",
    redirect_uris: [
      `${baseURL}/auth_callback`
    ],
    scopes: [
      'openid', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', 'profile'
    ]
  }
}