import React from "react"
import { SimpleDialog } from '@rmwc/dialog';
import { Button } from '@rmwc/button';
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';

const AlertDialog = ({ showAlertDialog, closeDialog }) => <SimpleDialog
    title="Diabetes alert"
    body={<div className="AlertDialog">
        <b>This patient is likely to have diabetes because of the following factors</b>
        <div>- High BMI </div>
        <div>- Age > 60</div>
        <div>- High systolic blood pressure</div>
    </div>}
    open={showAlertDialog}
    onClose={closeDialog}
/>

export default AlertDialog