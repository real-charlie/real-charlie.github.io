import {ContentHolderArticle} from "../Content/ContentHolder";
import Paragraph from "../Content/Paragraph";
import TagContent from "../Content/TagContent";
import Button from "../Button/Button";
import {useSelector} from "react-redux";
import Tag from "../Tag/Tag";

const PlanItem = (props: any) => {
    const content: any = useSelector((state: any) => state.content)
    return (
        <ContentHolderArticle className='p-3 justify-content-between gap-4'>
            <div className='d-flex flex-column gap-md-1'>
                <Paragraph style={{fontSize: '1.5rem'}}>
                    {props.title}
                </Paragraph>
                <TagContent tags={props.tags}/>
            </div>
            <div className='d-flex flex-column gap-1'>
                <Tag className='m-auto'>
                    {props.price} {content['CURRENCY']}
                </Tag>
                <Button onClick={
                    () =>
                        window.location.href =
                            `https://api.whatsapp.com/send/?phone=%2B989372119950&text=${content['WA_MSG_F']}${props.title}${content['WA_MSG_L']}&app_absent=0`
                }>
                    {content['REQUEST']}
                </Button>
            </div>
        </ContentHolderArticle>
    )
}

export default PlanItem
