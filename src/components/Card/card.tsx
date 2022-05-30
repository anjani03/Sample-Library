import React from "react";
import styled from 'styled-components';

const CardDiv = styled.div`
  width:  868px;
  background-color: #FFFFFF;
  min-height: 388px;
  border-radius: 12px;
  margin-top: 28px;
  display: flex;
  flex-direction: row;
`;

export interface CardProps {
  text: string;
}

const Card = (props: CardProps) => {
  return (
  <CardDiv>{props.text}</CardDiv>
  );
};

export default Card;