import React from "react"

const PatientDetails = ({ patientData, view, seeingPatient }) => (
    view === "nurse" || (view === "doctor" && seeingPatient) ? <div className="PatientDetails">
        <span><b>Name: </b>{patientData.name}</span>
        <span><b>Gender: </b>{patientData.gender}</span>
        <span><b>Age: </b>{patientData.age}</span>
        <span><b>Allergies: </b> G6PD, nuts... </span>

    </div> : <div className="PatientDetails" />)

export default PatientDetails