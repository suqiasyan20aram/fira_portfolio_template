import React from "react";

import classes from './Person.module.css'
import {data} from '../../data'

const Person = () => {
    return (
        <div className={classes.personBlock}>
            <h1 className={classes.personName}>
                <span className={classes.wordLetter}>
                    {data.name} {data.surname}
                </span>
            </h1>
            <h2 className={classes.personProfession}>{data.profession}</h2>
        </div>
    )
}

export default Person
