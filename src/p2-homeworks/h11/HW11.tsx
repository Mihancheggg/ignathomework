import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import styles from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const changeFirstValueHandler = (value: number) => {
        setValue1(value)
    }

    const changeSecondValueHandler = (value: number) => {
        setValue2(value)
    }

    const changeValuesHandler = (values: [number, number]) => {
        changeFirstValueHandler(values[0])
        changeSecondValueHandler(values[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={styles.rangeContainer}>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={changeFirstValueHandler}
                />
            </div>

            <div className={styles.rangeContainer}>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1,value2]}
                    onChangeRange={changeValuesHandler}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
