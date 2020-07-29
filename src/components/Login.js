import React from 'react';
import { redirectUri, authEndpoint, clientId, scopes } from '../util/config';

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
