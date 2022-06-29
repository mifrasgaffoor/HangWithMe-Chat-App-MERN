import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
const App = () => {
  return (
    <div>
      <Route path="/chats" exact component={ChatPage} />
      <Route path="/" exact component={HomePage} />
    </div>
  );
};

export default App;
