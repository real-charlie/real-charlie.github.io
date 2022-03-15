import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";

const Tag = styled.div`
  display: flex;
  gap: 3px;
  width: fit-content;
  word-spacing: 0;
  border-radius: 100px;
  background-color: ${ThemeConstants.PRIMARY};
  color: ${ThemeConstants.SECONDARY};
  padding: 5px 10px;
  font-size: 12px;
`

export default Tag
