import React from "react";
import Card from 'react-bootstrap/Card'
import { customCarddefault } from "./constants";
const index = ({ header,text, titre, children }: CustomCardProps) => {
  return (
    <Card className="text-center">
  <Card.Header>{header}</Card.Header>
  <Card.Body>
    <Card.Title>{titre}</Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
    {children}
  </Card.Body>
  </Card>
  );
};
index.defaultProps = {
  ...customCarddefault,
};
export default index;
