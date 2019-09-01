import styled from "styled-components";
import {borderRadius, colors, size} from "./variables";

const Button = styled.button`
  background: ${props => {
    return props.destructive ? colors.saucyRed : colors.accent;
  }};
  border: 2px solid ${colors.lightGrey} ;
  border-radius: ${borderRadius.smallBorderRadius};
  box-shadow: none;
  color: black;
  cursor: pointer;
  font-size: ${size.tiny};
  margin-bottom: ${size.tiny};
  margin-right: ${size.micro};
  outline: none;
  padding: ${size.tiny};
  transition: background 0.2s ease;

  &:hover {
    background: ${props => {
    return props.destructive ? colors.saucyRed : colors.accent;
  }};
  }
`;

export default Button;
