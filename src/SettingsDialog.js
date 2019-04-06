import React from "react"
import { SimpleDialog } from '@rmwc/dialog';
import { Button } from '@rmwc/button';
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';

import { Select } from '@rmwc/select';
import '@material/select/dist/mdc.select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';

const SettingsBody = ({ alertLevels, setAlertLevels }) => <div className="AlertDialog">
    <div>Best practices alert level</div>
    <Select
        label=""
        value={alertLevels.bestPractices}
        options={['High', 'Medium', 'Low', "None"]}
        onChange={evt => setAlertLevels({ ...alertLevels, bestPractices: evt.target.value })}
    />
    <div>Bleeding risk alert level</div>
    <Select
        label=""
        value={alertLevels.bleedingRisk}
        options={['High', 'Medium', 'Low', "None"]}
        onChange={evt => setAlertLevels({ ...alertLevels, bleedingRisk: evt.target.value })}
    />

    <div>Diabetes risk alert level</div>
    <Select
        label=""
        value={alertLevels.diabetesRisk}
        options={['High', 'Medium', 'Low', "None"]}
        onChange={evt => setAlertLevels({ ...alertLevels, diabetesRisk: evt.target.value })}
    />
</div>

const SettingsDialog = ({ showSettingsPage, closeDialog, alertLevels, setAlertLevels }) => <SimpleDialog
    title="Alert Settings"
    body={<SettingsBody alertLevels={alertLevels} setAlertLevels={setAlertLevels} />}
    open={showSettingsPage}
    onClose={closeDialog}
/>

export default SettingsDialog