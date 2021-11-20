import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';
import { customCard } from "./constants";
const index = ({ text, titre, children }: CustomCardProps) => {
  return (
    <Card className="text-center">
        <CardBody>
        <CardTitle>{titre}</CardTitle>
        <CardText>{text}</CardText>
        {children}
      </CardBody>
    </Card>
  );
};
index.defaultProps = {
  ...customCard,
};
export default index;
