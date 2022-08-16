import React from 'react'
import {Slider} from '@mui/material';

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const minDistance = 5

    const sliderValue = value

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                onChangeRange([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                onChangeRange([clamped - minDistance, clamped]);
            }
        } else {
            onChangeRange(newValue as [number,number]);
        }
    };

    return (
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            style={{width: '120px'}}
            //getAriaValueText={valuetext}
        />
    );
}

export default SuperDoubleRange
