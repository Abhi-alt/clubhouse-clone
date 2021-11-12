import React from 'react';
import DailyInfoCard from '../components/DailyInfoCard';
import Header from '../components/Header';
import style from '../style/home.module.css';

export default function Home(){
    return(
        <div>
            <Header />
            <div className={style.home_container}>
                <DailyInfoCard />
            </div>
        </div>
    )
}