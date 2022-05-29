import React from 'react'
import styles from './Message.module.css'


export type MessageType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: MessageType) {
    return (
        <div className={styles.message}>
            <img className={styles.message_img} src={props.avatar} alt=""/>
            <div className={styles.message_block}>
                <div className={styles.message_name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={styles.message_time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
