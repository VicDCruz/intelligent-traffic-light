import React, { useState } from "react";
import { withRouter } from "react-router";
import { Layout } from "antd";
import cubejsLogo from "../itam-logo.png";
import tracker from "../tracker";

const Header = ({ location }) => {
  const [sendingEvent, setSendingEvent] = useState(false);
  return (
    <Layout.Header
      style={{
        padding: "0 32px"
      }}
    >
      <div
        style={{
          float: "left"
        }}
      >
        <h2
          style={{
            color: "#fff",
            margin: 0,
            marginRight: "1em"
          }}
        >
          <img alt="cubejs-logo" src={cubejsLogo} height={40} />
          <p className="stats">Semáforos inteligentes</p>
        </h2>
      </div>
    </Layout.Header>
  )
};

export default withRouter(Header);
