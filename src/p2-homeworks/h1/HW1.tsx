import React from 'react'
import Message from './Message'
import './Message.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some very, very long text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
        </div>
    )
}

export default HW1
