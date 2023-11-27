'use client';

import { signIn, signOut } from 'next-auth/react';
import React from 'react';

function LoginBtn() {
  return (
    <button
      onClick={() => {
        signIn();
      }}
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
    >
      Logout
    </button>
  );
}

export { LoginBtn, LogoutBtn };
