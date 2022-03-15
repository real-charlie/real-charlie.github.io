import React, {useEffect, useRef} from 'react';
import './_app.sass'
import '../customized-bootstrap.scss';
import {useDispatch, useSelector} from "react-redux";
import {languageENAction, languageFAAction, languageITAction} from "../actions/language_actions";
import Navbar from "./Navbar/Navbar";
import FirstContent from "./Content/FirstContent";
import Projects from "./Projects/Projects";
import Plans from "./Plans/Plans";
import Connections from "./Connections/Connections";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const App = () => {
    const dispatch = useDispatch()

    useEffect(
        () => {
            const pathname = window.location.pathname
            if (pathname === '/fa')
                dispatch(languageFAAction())
            else if (pathname === '/it')
                dispatch(languageITAction())
            else
                dispatch(languageENAction())
        },
        []
    )
    const content: any = useSelector((state: any) => state.content)

    const plansRef = useRef(null)


    return (
        <main className='d-flex flex-column'>
            <Navbar/>
            <div className="d-flex flex-column gap-3"
                 style={{direction: content['LANG_NAME'] === 'فارسی' ? 'rtl' : 'ltr'}}>
                <FirstContent plans={plansRef}/>
                <Projects/>
                <Plans refer={plansRef}/>
                <Connections/>
                <Content title={content['ABOUT']} id='about'>
                    {content['ABOUT_FULL']}
                </Content>
                <Footer/>
            </div>
        </main>
    );
}

export default App;
