import { FC } from 'react'

import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";
import {Amplify} from "aws-amplify";
import './App.css'
import awsExports from "./aws-exports.ts";

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

const App: FC<WithAuthenticatorProps> = ({ user }) => {
  return (
      <div>
          Hello {user?.username || "stranger"}
      </div>
  )
}

export default withAuthenticator(App, { hideSignUp: true });
