import React from 'react';
import { redirectUri, authEndpoint, clientId, scopes } from '../util/config';

function Login() {
  return (
    <a
      href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        '%20'
      )}&response_type=token&show_dialog=true`}
    >
      Login with Spotify
    </a>
  );
}

export default Login;
