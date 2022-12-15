import React from "react";
import classes from "./Input.module.css"
const Input = React.forwardRef((props,ref) => {
    return(
        <div className={classes.input}>
            
            <input {...props.input} ref={ref} />
            <label htmlFor={props.input.id}>{props.label}</label>
        </div>
    )
})





export default Input