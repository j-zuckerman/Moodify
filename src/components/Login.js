import React from 'react';
import { authEndpoint, clientId, scopes } from '../util/config';
import { FaSpotify } from 'react-icons/fa';

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
      className="flex items-center mt-10 text-xl bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-5 rounded"
    >
      <FaSpotify className="mx-3" />
      Login with Spotify
    </a>
  );
}

export default Login;
