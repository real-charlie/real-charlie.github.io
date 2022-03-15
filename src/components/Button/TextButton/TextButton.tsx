import styled from "styled-components";
import ThemeConstants from "../../../constants/theme_constants";
import {useState} from "react";

const MainTextButton = styled.a`
  background-color: transparent;
  color: ${ThemeConstants.PRIMARY};
  padding: 10px;
  display: flex;
  gap: 5px;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
`

const TextButton = (props: any) => {
    const [isFocused, setFocus] = useState(false)


    const onBlur = (event: any) => {
        if (isFocused)
            setFocus(false)
        if (props.onBlur !== undefined)
            props.onBlur(event) || props.onBlur()
    }

    return (
        <button onBlur={onBlur} style={{background: 'none', border: 'none'}}>
            <MainTextButton {...props} href={props.href}
                            style={{borderColor: isFocused ? `${ThemeConstants.PRIMARY}` : 'transparent', ...props.style}}>
                {props.children}
            </MainTextButton>
        </button>
    )
}

export default TextButton
