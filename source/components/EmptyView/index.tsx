import React from "react";
import { CartIcon, Info, Container } from "./styles";

interface Props {
  icon: string;
  title: string;
}

const EmptyView: React.FC<Props> = ({ title, icon }) => {
  return (
    <Container>
      <CartIcon name={icon} size={100} />
      <Info>{title}</Info>
    </Container>
  );
};

export default EmptyView;
