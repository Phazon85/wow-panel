import React from 'react'
import logo from './img/classic.jpg'
import Button from '@material-ui/core/Button';


export default function Information(props) {
    return (
        <div class="Body text-center">
            <img src={logo} alt="classic WoW splash" class="splash-img"/>
            <h1>Ascent WoW Private Server</h1>
            <p>1. Download a 1.12 Vanilla WoW Client from the source of your choice.</p>
            <p>2. Extract/Install the Classic WoW Client.</p>
            <p>3. Navigate to your install folder in your file explorer.</p>
            <p>4. Edit the realmlist.wtf file and set to:</p>
            <p>set realmlist wow.phazon.app</p>
            <p>5. <Button onClick={props.toggle}>Register</Button></p>
        </div>
    )
}