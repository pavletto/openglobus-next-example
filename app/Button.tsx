import React, {useEffect} from "react";
import {useGlobeContext} from "@openglobus/openglobus-react";

export  const Button = () => {
    const {globe} = useGlobeContext()
    const onClick = () => {
        console.log(globe)
    }
    useEffect(() => {
        console.log(globe)
    }, [globe]);

    return <button onClick={onClick}>log globe</button>
}