import React from "react";
import Information from './Information'
import Login from './Login'


export default function Body(props) {
    return (
        <div>
        {props.register ? <Login /> : <Information toggle={props.toggle} /> }
        </div>
    )
}