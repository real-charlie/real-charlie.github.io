import styled from "styled-components";
import Content from "./Content";
import ThemeConstants from "../../constants/theme_constants";
import {useSelector} from "react-redux";
import Button from "../Button/Button";

const ContentFrame = styled.div`
  justify-content: center;
  padding: 20px;
  background-color: ${ThemeConstants.SECONDARY};
  background-image: url(https://eupclick.com/assets/images/services/code.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`

const FirstContent = (props: any) => {
    const content: any = useSelector((state: any) => state.content)

    return (
        <ContentFrame>
            <div className='d-flex flex-column justify-content-between m-auto gap-5 p-3 bg-secondary'
                 style={{maxWidth: '500px', borderRadius: '20px', borderTopRightRadius: '5px'}}>
                <Content color={ThemeConstants.PRIMARY} title={content['FIRST_CONTENT_TITLE']}>
                    {content['FIRST_CONTENT']}
                </Content>
                <Button onClick={() => {
                    props.plans.current.scrollIntoView()
                    console.log(props.plans.current)
                }}>
                    {content['VIEW_PLANS']}
                </Button>
            </div>
        </ContentFrame>
    )
}

export default FirstContent
