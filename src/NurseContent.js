import React from "react"
import '@material/slider/dist/mdc.slider.css';
import { Slider } from '@rmwc/slider';
import '@material/typography/dist/mdc.typography.css';
import { Typography } from '@rmwc/typography';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import { TextField } from '@rmwc/textfield';

const NurseContent = ({ vitals, setVitals }) => <div className="NurseContent">

    <div className="Measurements">
        <>
            <Typography use="headline4">Height: {vitals.height}cm</Typography>
            <Slider
                value={vitals.height === null ? 160 : vitals.height}
                onChange={evt => setVitals({ ...vitals, height: evt.detail.value })}
                onInput={evt => setVitals({ ...vitals, height: evt.detail.value })}
                discrete
                step={1}
                min={10}
                max={250}
            />
        </>
        <div className="Break" />

        <>
            <Typography use="headline4">Weight: {vitals.weight}kg</Typography>
            <Slider
                value={vitals.weight === null ? 60 : vitals.weight}
                onChange={evt => setVitals({ ...vitals, weight: evt.detail.value.toFixed(1) })}
                onInput={evt => setVitals({ ...vitals, weight: evt.detail.value.toFixed(1) })}
                discrete
                step={0.1}
                min={3}
                max={150}
            />
        </>
        <div className="Break" />
        <>
            <Typography use="headline4">Blood pressure</Typography>
            <div className="BloodPressure">
                <TextField outlined label="systolic" />
                <TextField outlined label="diastolic" />
            </div>
        </>
        <div className="Break" />
        <>
            <Typography use="headline4">Heart rate: {vitals.heartRate}bpm</Typography>
            <Slider
                value={vitals.heartRate === null ? 80 : vitals.heartRate}
                onChange={evt => setVitals({ ...vitals, heartRate: evt.detail.value })}
                onInput={evt => setVitals({ ...vitals, heartRate: evt.detail.value })}
                discrete
                step={1}
                min={30}
                max={250}
            />
        </>

    </div>
</div>

export default NurseContent