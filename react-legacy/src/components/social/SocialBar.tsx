import React from "react";
import styled from "styled-components";
import { getIcon } from "../icons";

const SocialDiv = styled.div`
  padding: 10px;
  color: ${(props) => props.theme.fontColor};
  border-top: 2px solid ${(props) => props.theme.primaryColor};
  border-bottom: 2px solid ${(props) => props.theme.primaryColor};
  margin: 12px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7rem;

  svg {
    height: 1rem;
    width: 1rem;
    vertical-align: top;
  }

  a,
  svg {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export function SocialBar({ items }: any) {
  if (!items) return null;

  return (
    <SocialDiv>
      {Object.entries(items)
        .filter((value) => typeof value[1] !== "function" && value[1] !== "")
        .map((icon: any) => (
          <a href={icon[1]} key={icon[1].split("/")}>
            {getIcon(icon[0])}
          </a>
        ))}
    </SocialDiv>
  );
}
