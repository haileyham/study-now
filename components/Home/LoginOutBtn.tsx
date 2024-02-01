'use client';

import { signIn, signOut } from 'next-auth/react';
import React from 'react';

function LoginBtn() {
  return (
    <button
      onClick={() => {
        signIn();
      }}
      className="btn-login"
    >
      Login
    </button>
  );
}
function LogoutBtn() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="btn-login"
    >
      Logout
    </button>
  );
}

export { LoginBtn, LogoutBtn };
