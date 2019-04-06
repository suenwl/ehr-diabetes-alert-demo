import React, { Component } from 'react';
import './App.css';
import PatientDetails from "./PatientDetails"
import Buttons from "./Buttons"
import SideBar from "./SideBar"
import classnames from "classnames"
import NurseContent from "./NurseContent"
import DoctorContent from "./DoctorContent"
import AlertDialog from "./AlertDialog"
import SettingsDialog from "./SettingsDialog"

class App extends Component {

  state = {
    view: "nurse",
    showSettingsPage: false,
    seeingPatient: false,
    showAlertDialog: false,
    alertLevels: {
      bestPractices: "Low",
      bleedingRisk: "Medium",
      diabetesRisk: "High"
    },
    patientData: {
      name: "Richard Tan",
      gender: "Male",
      dob: "20-9-1956",
      age: "63",
      allergies: ["G6PD", "nuts"]
    },
    vitals: {
      weight: null,
      height: null,
      bloodPressure: {},
      heartRate: null,
      generalObservations: null
    }
  }

  setVitals = (vitals) => {
    this.setState({ vitals })
  }

  switchPage = () => {
    this.setState({
      view: this.state.view == "nurse" ? "doctor" : "nurse"
    })
  }

  toggleSettingsPage = () => {
    this.setState({
      showSettingsPage: this.state.showSettingsPage ? false : true
    })
  }

  seePatient = () => {
    this.setState({
      seeingPatient: this.state.seeingPatient ? false : true
    })
    setTimeout(() => {
      this.setState({ showAlertDialog: true })
    }, 2000);
  }

  render() {
    const { view,
      showSettingsPage,
      showAlertDialog,
      alertLevels,
      seeingPatient,
      patientData,
      vitals } = this.state

    return (
      <div className="App" >
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <div className={classnames("Top-bar", view)}>
          <PatientDetails patientData={patientData} view={view} seeingPatient={seeingPatient} />
          <Buttons view={view} switchPage={this.switchPage}
            toggleSettingsPage={this.toggleSettingsPage}
            toggleAlertDialog={this.seePatient} />
        </div>
        <div className="Body">
          <div className="Menu">
            <SideBar view={view} />
          </div>
          <div className="Content">
            {view === "nurse" ?
              <NurseContent vitals={vitals} setVitals={this.setVitals} /> :
              seeingPatient ? <DoctorContent vitals={vitals} /> : null
            }
          </div>
        </div>
        <AlertDialog
          showAlertDialog={showAlertDialog}
          closeDialog={evt => { this.setState({ showAlertDialog: false }) }} />
        <SettingsDialog
          showSettingsPage={showSettingsPage}
          alertLevels={alertLevels}
          setAlertLevels={newAlertLevels => { this.setState({ alertLevels: newAlertLevels }) }}
          closeDialog={evt => { this.setState({ showSettingsPage: false }) }} />
      </div>
    );
  }
}

export default App;
