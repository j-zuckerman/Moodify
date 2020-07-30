import React from 'react';
import { authEndpoint, clientId, scopes } from '../util/config';

let redirectUri;
if (process.env.NODE_ENV === 'development')
  redirectUri = 'http://localhost:3000';
else if (process.env.NODE_ENV === 'production')
  redirectUri = 'https://j-zuckerman.github.io/Moodify/';

function Login() {
  return (
    <a
      href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        '%20'
      )}&response_type=token&show_dialog=true`}
      className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Login with Spotify
    </a>
  );
}

export default Login;
