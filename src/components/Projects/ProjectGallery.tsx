import {ArrowLeft, ArrowRight} from "@material-ui/icons";
import {projectItemObject} from "../../utils";
import TagConstants, {ReadyToUseTags} from "../../constants/tag_constants";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";
import {useRef, useState} from "react";

const ActionButton = styled.button`
  background-color: ${ThemeConstants.SECONDARY};
  color: ${ThemeConstants.PRIMARY};
  padding: 15px;
  width: fit-content;
  margin: auto;
  border-radius: 100px;
  border: 1.5px solid ${ThemeConstants.SECONDARY};

  &:hover {
    background-color: transparent;
  }
`

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: fit-content;
  gap: 20px;
  padding: 15px 10px;
`

const ProjectGallery = (props: any) => {
    const [transform, setTransform] = useState(0)
    const targetComponent = useRef(null)

    const actionButtonOnClick = (number: number) => {
        if (targetComponent !== null) {
            const max = props.tg.current.offsetWidth / 2
            const result = transform - (number * max)

            // @ts-ignore
            if (result <= 0 && Math.abs(result) < targetComponent.current.offsetWidth - max)
                setTransform(result)
        }
    }
    return (
        <div className='d-flex flex-column gap-3'>

            <ActionButton onClick={() => actionButtonOnClick(1)}>
                <ArrowRight/>
            </ActionButton>
            <ProjectContainer style={{transform: `translateX(${transform}px)`}} ref={targetComponent}>
                {
                    props.items.map(
                        (each: any, index: number) =>
                            <ProjectItem img={each.img} title={each.title} href={each.href} key={index}
                                         tags={each.tags}/>
                    )
                }
            </ProjectContainer>
            <ActionButton onClick={() => actionButtonOnClick(-1)}>
                <ArrowLeft/>
            </ActionButton>
        </div>
    )
}

export default ProjectGallery
