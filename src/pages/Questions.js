import React from 'react';
import { Header } from '../components/Header';
import { SideBarQuestion } from '../components/SideBarQuestion';
import TitleBar from '../components/TitleBar';

const Questions = () => {
    return (
        <div>
            <Header />
            <TitleBar content='All Questions'/>
            <SideBarQuestion />
        </div>
    )
}

export default Questions;