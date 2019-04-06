import React from "react"
import '@material/list/dist/mdc.list.css';
import {
    List,
    ListItem
} from '@rmwc/list';

const SideBar = ({ view }) => <List className="sidebar">{view === "nurse" ?
    <>
        <ListItem> Demographics </ListItem>
        <ListItem activated> Record vitals </ListItem>
    </>
    :
    <><ListItem activated> Patient overview </ListItem>
        <ListItem> Demographics </ListItem></>
}

    <ListItem> Immunisation </ListItem>
    <ListItem> Allergies </ListItem>
    <ListItem> Past medical history </ListItem>
    <ListItem> Family history </ListItem>
    <ListItem> Social history </ListItem>
    <ListItem> HPI / Problem List </ListItem>
    <ListItem> Procedures </ListItem>
    <ListItem> Assessment </ListItem>
</List>

export default SideBar