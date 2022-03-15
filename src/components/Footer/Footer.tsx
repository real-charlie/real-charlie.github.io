import {useSelector} from "react-redux";
import GithubIcon from "@material-ui-extra/icons/GithubIcon";
import TextButton from "../Button/TextButton/TextButton";
import Paragraph from "../Content/Paragraph";

const Footer = () => {
    const content: any = useSelector((state: any) => state.content)
    return (
        <footer className='bg-secondary text-primary'>
            <div className='container-justified d-flex flex-wrap gap-3 justify-content-between p-3'>
                <Paragraph className='mt-auto mb-auto'>{content['FOOTER_TEXT']}</Paragraph>
                <TextButton href='https://github.com/real-charlie/Intro' style={{paddingLeft: '0',paddingRight: '0',}}>
                    <GithubIcon/>Scripts
                </TextButton>
            </div>
        </footer>
    )
}

export default Footer
