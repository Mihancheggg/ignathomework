import React from 'react'
import {AffairType} from './HW2';
import styles from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={styles.container}>
            <b>{props.affair.name}</b><span>{props.affair.priority}</span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
