import React, { Component } from "react";
import Router from "next/router";

export default function Index() {
  React.useEffect(() => {
    if (window.sessionStorage.getItem('user') !== null) {
      Router.push("/dashboard");
    } else {
      Router.push("/auth/login");
    }
  });

  return <div />;
}
