import React, { Fragment } from "react";
import classes from "./Modal.module.css"
import  ReactDOM  from "react-dom";







const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}>

        </div>
    )
    }

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalLocation = document.getElementById('overlays')
const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalLocation)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}

        </Fragment>
    )
}

export default Modal