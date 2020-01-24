import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const Contacts = props => {
  function handleClick(e) {
    console.log("link was clicked");
  }
  return (
    <Button
      color="none"
      className="button-link"
      href={props.url}
      onClick={handleClick}
    >
      <h4>{props.text}</h4>
    </Button>
  );
};

export default Contacts;
