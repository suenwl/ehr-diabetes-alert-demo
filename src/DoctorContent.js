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

const DoctorContent = ({ vitals }) => <div className="DoctorContent">

    <div className="Doctor">
        <div className="Break" />
        <>
            <Typography use="headline4">Patient history</Typography>
            <TextField outlined textarea label="Patient history" />
        </>
        <div className="Break" />
        <>
            <Typography use="headline4">Care plan</Typography>
            <TextField outlined textarea label="Care plan" />
        </>
        <div className="Break" />
        <>
            <Typography use="headline4">Medications</Typography>
            <TextField outlined textarea label="Medications" />
        </>

    </div>
</div>

export default DoctorContent