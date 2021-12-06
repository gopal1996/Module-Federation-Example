import React from "react";
import styled from "styled-components";
import MarkdownIt from "markdown-it";
import { useItems } from "../data.store";

const RoundedImage = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  float: left;
  shape-outside: circle();
  margin-right: 20px;
  margin-bottom: 5px;
  border: 0.5px solid ${(props) => props.theme.fontColor};
`;

const MarkdownHolder = styled.div`
  ul {
    margin: 0;
    padding-left: 1rem;
  }
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

export function Description({ description, photo }: any) {
  const image = photo && (
    <PhotoElement>
      <RoundedImage src={photo} />
    </PhotoElement>
  );

  return (
    <>
      {image}
      <MarkdownHolder
        dangerouslySetInnerHTML={{ __html: mdParser.render(description) }}
      />
    </>
  );
}

export function PhotoElement({ children }: any) {
  const isPhotoDisplayed = useItems((state: any) => state.isPhotoDisplayed);

  return isPhotoDisplayed && children;
}
