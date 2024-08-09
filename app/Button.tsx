import React, {useEffect} from "react";
import {useGlobeContext} from "@openglobus/openglobus-react";
import './Button.css'

export const Button = () => {
    const {globe} = useGlobeContext()
    const onClick = () => {
        console.log(globe)
    }
    useEffect(() => {
        console.log(globe)
    }, [globe]);

    return <button className={'button'} onClick={onClick}>log globe</button>
}