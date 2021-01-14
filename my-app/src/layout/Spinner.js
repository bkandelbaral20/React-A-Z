import React, {Fragment} from 'react'
import loader from "./loader.gif"

//creating spinner function and adding img on it
const Spinner = () =>
    <Fragment>
        <img src={loader} alt={"loading"} style={{width: '200px', margin: 'auto', display: 'block'}}/>
    </Fragment>

export default Spinner