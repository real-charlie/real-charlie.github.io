import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";
import Paragraph from "../Content/Paragraph";
import Tag from "../Tag/Tag";
import ContentHolder from "../Content/ContentHolder";
import TagContent from "../Content/TagContent";


const ProjectItem = (props: any) => {
    return (
        <ContentHolder href={props.href}>
            <img src={props.img} alt='image'
                 style={{height: '35%', width: '100%', backgroundColor: ThemeConstants.PRIMARY, objectFit: 'cover'}}/>
            <div className='d-flex flex-column gap-3 pt-3'>
                <Paragraph style={{fontSize: '1.5rem'}}>
                    {props.title}
                </Paragraph>
                <TagContent tags={props.tags}/>
            </div>
        </ContentHolder>
    )
}

export default ProjectItem
