import React from "react";
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import exploreStyle from '../style/explore.module.css';
import style from '../style/profile.module.css';

export default function Profile(){
    return(
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-right mb-0`}>
                        <Link to="/home">
                            <img src="/images/arrow.png" className={exploreStyle.arrow_icon}/>
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img src="/images/user1.png" className={style.profile_image} />
                <h4>Profile Man</h4>
                <p>@profileman</p>
                <div className={style.follow}>
                    <p>
                        <span>0</span> followers
                    </p>
                    <p>
                        <span>11</span> following
                    </p>
                </div>
                <button>Add a bio</button>
                <div className="mb-4">
                    <button className="mb-0">
                        <AiOutlineTwitter /> Add Twitter
                    </button>
                    <button className="mb-0">
                        <AiOutlineInstagram /> Add Instagram
                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/user1.png" />
                    <div>
                        <p>Joined 27-July-2021</p>
                        <p>
                            Niminated by <span>Anton Alarcon</span>
                        </p>
                    </div>
                </div>
                <p>Member of</p>
                <button className={style.addMemberBtn}>
                    <BsPlus />
                </button>
            </div>
        </>
    )
}