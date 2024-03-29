import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from '../style/bottomSheet.module.css';
import StartRoom from './bottom_sheets/StartRoom';
import NewRoom from './bottom_sheets/NewRoom';

export default function BottomSheet(props){
    return(
        <SwipeableBottomSheet 
        bodyStyle = {{
            maxWidth:'500px', 
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '10px',
        }}
        open={props.sheetVisible}
        onChange={() => {
            props.setSheetVisible(!props.sheetVisible);
            props.setItemsVisible(true);
        }}
        fullscreen={props.sheetTitle === "room detail" ? true: false}
        >
            <div className={style.BottomSheetContainer} style={{backgroundColor: props.sheetTitle  === "profile"? "transparent" : ""}}>
                {
                    props.sheetTitle === "new room" ? (
                        <NewRoom
                            cardDetail = {props.cardDetail}
                            setSheetVisible = {(item) => {
                                props.setSheetVisible(item);
                                props.setItemsVisible(true);
                            }}
                        />
                    ) : props.sheetTitle === "start room" ? (
                        <StartRoom 
                            setSheetCreateRoom = {props.setSheetCreateRoom}
                            setSheetVisible = {(item) => {
                                props.setSheetVisible(item);
                                props.setItemsVisible(true);
                            }}
                        />
                    ) : ("")
                }
            </div>
        </SwipeableBottomSheet>
    )
}