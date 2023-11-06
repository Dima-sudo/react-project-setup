/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import CircleIcon from '@mui/icons-material/Circle';
import TimelineIcon from '@mui/icons-material/Timeline';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DataObjectIcon from '@mui/icons-material/DataObject';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AvatarIcon from '@mui/material/Avatar';
import PlusIcon from '@mui/icons-material/Add';

import GraphLogo from '../../assets/svgComponents/Graph';
import WallLogo from '../../assets/svgComponents/Wall';
import UnderConstruction from '../../assets/svgComponents/UnderConstruction';
import ArrowRightLarge from '../../assets/svgComponents/ArrowRightLarge';

export const Icons: Record<string, React.ReactNode> = {
    HAMBURGER: <MenuIcon />,
    INFO: <InfoIcon />,
    CIRCLE: <CircleIcon />,
    GRAPH: <TimelineIcon />,
    GRAPH2: <InsightsIcon />,
    UPLOAD: <UploadFileIcon />,
    OBJECT: <DataObjectIcon />,
    SETTINGS: <SettingsIcon />,
    SETTINGS2: <TuneIcon />,
    HISTORY: <HistoryIcon />,
    SEARCH: <SearchIcon />,
    BUILD: <BuildIcon />,
    HOME: <HomeIcon />,
    NAVIGATE_NEXT: <NavigateNextIcon />,
    ARROW_DOWN: <ArrowDropDownIcon />,
    ARROW_UP: <ArrowDropUpIcon />,
    ARROW_RIGHT: <ArrowRightIcon />,
    ARROW_LEFT: <ArrowLeftIcon />,
    ARROW_RIGHT_LARGE: <ArrowRightLarge />,
    LOG_OUT: <PowerSettingsNewIcon />,
    AVATAR: <AvatarIcon />,
    PLUS: <PlusIcon />,

    GRAPH_LOGO: <GraphLogo />,
    WALL_LOGO: <WallLogo />,
    UNDER_CONSTRUCTION_LOGO: <UnderConstruction />,
};

export enum IconNamesEnum {
    HAMBURGER = 'HAMBURGER',
    INFO = 'INFO',
    CIRCLE = 'CIRCLE',
    GRAPH = 'GRAPH',
    GRAPH2 = 'GRAPH2',
    UPLOAD = 'UPLOAD',
    OBJECT = 'OBJECT',
    SETTINGS = 'SETTINGS',
    SETTINGS2 = 'SETTINGS2',
    HISTORY = 'HISTORY',
    SEARCH = 'SEARCH',
    BUILD = 'BUILD',
    HOME = 'HOME',
    NAVIGATE_NEXT = 'NAVIGATE_NEXT',
    ARROW_DOWN = 'ARROW_DOWN',
    ARROW_UP = 'ARROW_UP',
    ARROW_RIGHT = 'ARROW_RIGHT',
    ARROW_LEFT = 'ARROW_LEFT',
    ARROW_RIGHT_LARGE = 'ARROW_RIGHT_LARGE',
    LOG_OUT = 'LOG_OUT',
    AVATAR = 'AVATAR',
    PLUS = 'PLUS',

    GRAPH_LOGO = 'GRAPH_LOGO',
    WALL_LOGO = 'WALL_LOGO',
    UNDER_CONSTRUCTION_LOGO = 'UNDER_CONSTRUCTION_LOGO',
}

export const SvgRenderer = (iconName: string) => Icons[iconName];
