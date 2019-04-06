import React from "react"
import { IconButton } from '@rmwc/icon-button';
import '@material/icon-button/dist/mdc.icon-button.css';

const Buttons = ({ view, switchPage, toggleAlertDialog, toggleSettingsPage }) => <div>
    {view === "nurse" ?
        <>
            <IconButton icon="face" label="Switch view" onClick={switchPage} />
        </> :
        <>
            <IconButton icon="play_arrow" label="Settings" onClick={toggleAlertDialog} />
            <IconButton icon="settings" label="Settings" onClick={toggleSettingsPage} />
            <IconButton icon="person" label="Switch view" onClick={switchPage} />
        </>
    }
</div>

export default Buttons