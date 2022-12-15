import { Fragment } from "react"
import classes from "./Header.module.css"
import sushiPic from "../../assets/sushi.webp"
import CartButton from "./CartButton"




const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Cuisine</h1>
                <CartButton onShowCart={props.onShowCart}></CartButton>
            </header>
            <div className={classes['main-image']}>
            <img src={sushiPic} alt="Pic of the sushis!" />
            </div>

        </Fragment>
    )
}

export default Header