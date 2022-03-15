import Content from "../Content/Content";
import {useSelector} from "react-redux";
import PlanItem from "./PlanItem";
import TagConstants from "../../constants/tag_constants";
import {planItemObject} from "../../utils";
import PriceConstants from "../../constants/price_constants";

const Plans = (props: any) => {
    const content: any = useSelector((state: any) => state.content)

    return (
        <Content title={content['PLANS']} id='plans' refer={props.refer}>
            <div className='d-flex flex-wrap justify-content-center gap-3 p-2'>
                {
                    [
                        planItemObject(
                            content['P1'], PriceConstants.STD,
                            [
                                TagConstants.FRONT_END(content['UI']),
                                TagConstants.FRONT_END(content['UX']),
                                TagConstants.SEO,
                                TagConstants.SUP(content['SUP']),
                                TagConstants.NORMAL(content['NORMAL']),
                            ]
                        ),
                        planItemObject(
                            content['P2'], PriceConstants.INS,
                            [
                                TagConstants.FRONT_END(content['UI']),
                                TagConstants.HOST(content['HOST']),
                                TagConstants.INSTANT(content['FAST']),
                            ]
                        ),
                        planItemObject(
                            content['P3'], PriceConstants.SPC,
                            [
                                TagConstants.FRONT_END(content['UI']),
                                TagConstants.FRONT_END(content['UX']),
                                TagConstants.BACK_END(content['BACKEND']),
                                TagConstants.HOST(content['HOST']),
                                TagConstants.SEO,
                                TagConstants.SETUP(content['SETUP']),
                                TagConstants.SUP(content['SUP']),
                                TagConstants.SLOW(content['SLOW']),
                            ]
                        ),
                        planItemObject(
                            content['P4'], PriceConstants.PRO,
                            [
                                TagConstants.FRONT_END(content['UI']),
                                TagConstants.BACK_END(content['BACKEND']),
                                TagConstants.SUP(content['SUP']),
                                TagConstants.NORMAL(content['NORMAL']),
                                TagConstants.INSTANT(content['FAST']),
                            ]
                        ),
                        planItemObject(
                            content['P5'], PriceConstants.ORG,
                            [
                                TagConstants.FRONT_END(content['UI']),
                                TagConstants.FRONT_END(content['UX']),
                                TagConstants.BACK_END(content['BACKEND']),
                                TagConstants.HOST(content['HOST']),
                                TagConstants.SETUP(content['SETUP']),
                                TagConstants.SEO,
                                TagConstants.MAINTENANCE(content['MAINTENANCE']),
                                TagConstants.SLOW(content['SLOW']),
                            ]
                        ),


                    ].map(
                        (each: any, index: number) =>
                            <PlanItem key={index} title={each.title} price={each.price} tags={each.tags}/>
                    )
                }

            </div>
        </Content>
    )
}

export default Plans
