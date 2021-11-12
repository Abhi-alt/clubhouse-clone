import React from 'react';
import DailyInfoCard from '../components/DailyInfoCard';
import Header from '../components/Header';
import RoomInfoCard from '../components/RoomInfoCard';
import style from '../style/home.module.css';
import {AiOutlinePlus} from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';

export default function Home(){
    return(
        <div>
            <Header />
            <div className={style.home_container}>
                <DailyInfoCard />
                <RoomInfoCard />
            </div>
            <div className={style.action_btn}>
                <button>
                    <AiOutlinePlus className="me-2" />
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap />
                </button>
            </div>
        </div>
    )
}