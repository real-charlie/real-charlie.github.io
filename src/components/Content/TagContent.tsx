import Tag from "../Tag/Tag";

const TagContent = (props: any) => {
    return (
        <div className='d-flex flex-wrap gap-2 justify-content-center p-2'>
            {
                props.tags.map(
                    (each: any, index: number) =>
                        <Tag key={index} style={each.style}>
                            {each.text}
                        </Tag>
                )
            }
        </div>
    )
}

export default TagContent
