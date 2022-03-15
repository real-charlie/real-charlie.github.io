import TextButton from "../Button/TextButton/TextButton";
import {ArrowDropDown, ArrowDropUp} from "@material-ui/icons";
import {useState} from "react";
import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";

const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  overflow-y: auto;
  min-width: 200px;
  border: 1px solid ${ThemeConstants.PRIMARY};
  max-height: 200px;
  gap: 5px;
  opacity: 0;
  transition: all 0.9s;
  z-index: 0;
`

const DropdownItem = styled.div`
  margin: 0;
  color: ${ThemeConstants.PRIMARY};
  cursor: pointer;
  padding: 3px;
  border-radius: 10px;

  &:hover {
    background-color: ${ThemeConstants.PRIMARY};
    color: white;
  }
`

const Dropdown = (props: any) => {
    const [icon, setIcon] = useState(<ArrowDropDown/>)
    const [isDropDown, setDropDown] = useState(true)

    const onClick = () => {
        if (isDropDown) {
            setDropDown(false)
            setIcon(<ArrowDropUp/>)
        } else {
            setDropDown(true)
            setIcon(<ArrowDropDown/>)
        }
    }


    return (
        <>
            <TextButton onClick={onClick}
                        onBlur={
                            () => {
                                setTimeout(() => {
                                    setDropDown(true)
                                    setIcon(<ArrowDropDown/>)
                                }, 300)
                            }
                        } >
                {props.children}
                {icon}
            </TextButton>
            <DropdownMenu style={{
                opacity: isDropDown ? '0' : '1',
                transform: isDropDown ? 'translateY(-200px)' : 'translateY(50px)'
            }}>
                {
                    props.items.map(
                        (each: any, index: number) =>
                            <DropdownItem key={index} onClick={each.onClick}>
                                {each.text}
                            </DropdownItem>
                    )
                }
            </DropdownMenu>
        </>
    )
}

export default Dropdown
