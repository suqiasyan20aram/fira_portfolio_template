import React from "react";

import classes from './Portfolio.module.scss'
import {data} from "../../data";

const Portfolio = () => {
    return (
        <section className={classes.portfolioSection}>
            portfolio
            <div className={classes.portfolioItems}>
                {data.portfolios.map(portfolio => {
                    return (
                        <div className={classes.portfolioItem}></div>
                    )
                })}
            </div>

        </section>
    )
}
export default Portfolio
