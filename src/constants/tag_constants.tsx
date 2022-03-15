import LinuxIcon from "@material-ui-extra/icons/LinuxIcon";
import MicrosoftWindowsIcon from "@material-ui-extra/icons/MicrosoftWindowsIcon";
import LanguageTypescriptIcon from "@material-ui-extra/icons/LanguageTypescriptIcon";
import LanguageJavascriptIcon from "@material-ui-extra/icons/LanguageJavascriptIcon";
import ReactIcon from "@material-ui-extra/icons/ReactIcon";
import AppleIcon from "@material-ui-extra/icons/AppleIcon";
import FirefoxIcon from "@material-ui-extra/icons/FirefoxIcon";
import OpenSourceInitiativeIcon from "@material-ui-extra/icons/OpenSourceInitiativeIcon";
import FileDocumentIcon from "@material-ui-extra/icons/FileDocumentIcon";
import LanguageJavaIcon from "@material-ui-extra/icons/LanguageJavaIcon";
import DiscordIcon from "@material-ui-extra/icons/DiscordIcon";
import LanguagePythonIcon from "@material-ui-extra/icons/LanguagePythonIcon";
import FreebsdIcon from "@material-ui-extra/icons/FreebsdIcon";
import VirusIcon from "@material-ui-extra/icons/VirusIcon";
import LanguageCIcon from "@material-ui-extra/icons/LanguageCIcon";
import LanguageKotlinIcon from "@material-ui-extra/icons/LanguageKotlinIcon";
import HammerIcon from "@material-ui-extra/icons/HammerIcon";
import PencilIcon from "@material-ui-extra/icons/PencilIcon";
import WebIcon from "@material-ui-extra/icons/WebIcon";
import BuildIcon from "@material-ui-extra/icons/BuildIcon";
import {Speed} from "@material-ui/icons";
import GoogleIcon from "@material-ui-extra/icons/GoogleIcon";
import SupportIcon from "@material-ui-extra/icons/SupportIcon";
import FanSpeedLowIcon from "@material-ui-extra/icons/FanSpeedLowIcon";
import FanSpeed1Icon from "@material-ui-extra/icons/FanSpeed1Icon";
import FanIcon from "@material-ui-extra/icons/FanIcon";
import TurtleIcon from "@material-ui-extra/icons/TurtleIcon";

const TagConstants = {
    REACTJS: {
        style: {
            color: 'white',
            backgroundColor: '#0081ff',
        },
        text: <><ReactIcon/>ReactJS</>,
    },
    JS: {
        style: {
            color: 'black',
            backgroundColor: '#e4ff00',
        },
        text: <><LanguageJavascriptIcon/>Javascript</>,
    },
    TS: {
        style: {
            color: 'white',
            backgroundColor: '#0068ff',
        },
        text: <><LanguageTypescriptIcon/>Typescript</>,
    },
    JAVA: {
        style: {
            color: 'white',
            backgroundColor: '#ff0000',
        },
        text: <><LanguageJavaIcon/>Java</>,
    },
    PYTHON: {
        style: {
            color: '#0055ff',
            backgroundColor: '#fff200',
        },
        text: <><LanguagePythonIcon/>Python</>,
    },
    C_LANG: {
        style: {
            color: 'white',
            backgroundColor: 'gray',
        },
        text: <LanguageCIcon/>,
    },
    KOTLIN: {
        style: {
            color: '#a927bf',
            backgroundColor: '#0036a1',
        },
        text: <><LanguageKotlinIcon/>Kotlin</>,
    },


    WINDOWS: {
        style: {
            color: 'white',
            backgroundColor: '#4691ff',
        },
        text: <><MicrosoftWindowsIcon/>Windows</>,
    },
    LINUX: {
        style: {
            color: 'white',
            backgroundColor: '#ff0033',
        },
        text: <><LinuxIcon/>Linux</>,
    },
    MAC: {
        style: {
            color: 'black',
            backgroundColor: '#ffffff',
        },
        text: <><AppleIcon/>MacOS</>,
    },
    WEB: {
        style: {
            color: 'white',
            backgroundColor: '#0000ee',
        },
        text: <><FirefoxIcon/>Web</>,
    },
    FULLY_SUPPORT: {
        style: {
            color: 'white',
            backgroundColor: '#000000',
        },
        text: <><MicrosoftWindowsIcon/><AppleIcon/><LinuxIcon/><FreebsdIcon/></>,
    },
    OPEN_SOURCE: {
        style: {
            color: 'white',
            backgroundColor: '#00ad00',
        },
        text: <><OpenSourceInitiativeIcon/>OpenSource</>,
    },
    DOCUMENTATION: {
        style: {
            color: 'white',
            backgroundColor: '#ff0000',
        },
        text: <><FileDocumentIcon/>Documentation</>,
    },
    DISCORD: {
        style: {
            color: 'white',
            backgroundColor: '#ba00e3',
        },
        text: <><DiscordIcon/>Discord</>,
    },
    SOON: {
        style: {
            color: 'white',
            backgroundColor: '#1bff00',
        },
        text: <><HammerIcon/>Soon</>,
    },
    FRONT_END: (text: string) => {
        return {
            style: {
                color: 'white',
                backgroundColor: '#0081ff',
            },
            text: <><ReactIcon/>{text}</>,
        }
    },
    BACK_END: (text: string) => {
        return {
            style: {
                color: '#0055ff',
                backgroundColor: '#fff200',
            },
            text: <><LanguagePythonIcon/>{text}</>,
        }
    },
    CUSTOMIZED: (text: string) => {
        return {
            style: {
                color: 'white',
                backgroundColor: '#a600ff',
            },
            text: <><PencilIcon/>{text}</>,
        }
    },
    HOST: (text: string) => {
        return {
            style: {
                color: 'black',
                backgroundColor: '#56efff',
            },
            text: <><WebIcon/>{text}</>,
        }
    },
    MAINTENANCE: (text: string) => {
        return {
            style: {
                color: 'black',
                backgroundColor: '#56ffbb',
            },
            text: <><HammerIcon/>{text}</>,
        }
    },
    SETUP: (text: string) => {
        return {
            style: {
                color: 'black',
                backgroundColor: '#6fff56',
            },
            text: <><BuildIcon/>{text}</>,
        }
    },
    INSTANT: (text: string) => {
        return {
            style: {
                color: 'white',
                backgroundColor: '#71bb0d',
            },
            text: <><FanIcon/>{text}</>,
        }
    },
    NORMAL: (text: string) => {
        return {
            style: {
                color: 'black',
                backgroundColor: '#ffe600',
            },
            text: <><Speed/>{text}</>,
        }
    },
    SLOW: (text: string) => {
        return {
            style: {
                color: 'white',
                backgroundColor: '#ff3c00',
            },
            text: <><TurtleIcon/>{text}</>,
        }
    },

    SUP: (text: string) => {
        return {
            style: {
                color: 'black',
                backgroundColor: '#07ff00',
            },
            text: <><SupportIcon/>{text}</>,
        }
    },
    SEO: {

        style: {
            color: 'white',
            backgroundColor: '#71bb0d',
        },
        text: <><GoogleIcon/>SEO</>,

    },


}

export const ReadyToUseTags = {
    OPENSOURCE_WEB_PAGE: [TagConstants.REACTJS, TagConstants.TS,
        TagConstants.WEB, TagConstants.OPEN_SOURCE,],
    DISCORD_BOT_PYTHON: [TagConstants.PYTHON, TagConstants.DISCORD, TagConstants.OPEN_SOURCE],
    JAVA_PROGRAM: [TagConstants.JAVA, TagConstants.FULLY_SUPPORT, TagConstants.OPEN_SOURCE],
}

export default TagConstants
