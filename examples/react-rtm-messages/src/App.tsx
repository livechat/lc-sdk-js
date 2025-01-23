import React, { useEffect } from "react";
import { TokenGetter, TokenType } from "@livechat/lc-sdk-js/src/authorization";
import { initializeConnection } from "./ws";
import { initCustomerTokenGetter } from "./customer";

const agentAccessToken = "<access_token>"; // e.g. dal:abc123abc123abc123abc123456
const agentTokenType: TokenType = "Bearer"; // Bearer or Basic

const organizationID = "<organization_id>";
const organizationRegion = "<region>"; // e.g. dal

const clientID = "<client_id>"; // your LiveChat integration client ID
const redirectURI = "<redirect_uri>"; // your LiveChat integration redirect URI

function App() {
  useEffect(() => {
    const agentTokenGetter: TokenGetter = () => ({
      accessToken: agentAccessToken,
      organizationID: organizationID,
      region: organizationRegion,
      tokenType: agentTokenType,
    });
    void initCustomerTokenGetter(organizationID, clientID, redirectURI)
      .then(customerTokenGetter => initializeConnection(agentTokenGetter, customerTokenGetter))
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
