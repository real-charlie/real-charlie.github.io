import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";

const ContentHolder = styled.a`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
  min-width: 250px;
  height: 300px;
  border-radius: 30px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${ThemeConstants.SECONDARY};
  box-shadow: 0 0 10px black;
  overflow: hidden;


  &:hover {
    box-shadow: 0 0 14px black;
  }
`

export const ContentHolderArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
  height: 450px;
  min-width: 250px;
  border-radius: 30px;
  background-color: ${ThemeConstants.SECONDARY};
  box-shadow: 0 0 10px black;
  overflow: hidden;


  &:hover {
    box-shadow: 0 0 14px black;
  }
`


export default ContentHolder
