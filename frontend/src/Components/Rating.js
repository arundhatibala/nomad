import React from 'react'
//import { propTypes } from 'react-bootstrap/esm/Image'
import PropTypes from 'prop-types';

const Rating = ({value, color}) => {
    return (
        <div className = 'Rating'>
            <span>
                <i style = {{color}}
                className={value >= 1 ? "bi-star-fill" : value >= 0.5 ? "bi-star-half" : "bi-star"}></i>
            </span>

            <span>
                <i style = {{color}}
                className={value >= 2 ? "bi-star-fill" : value >= 1.5 ? "bi-star-half" : "bi-star"}></i>
            </span>

            <span>
                <i style = {{color}}
                className={value >= 3 ? "bi-star-fill" : value >= 2.5 ? "bi-star-half" : "bi-star"}></i>
            </span>

            <span>
                <i style = {{color}}
                className={value >= 4 ? "bi-star-fill" : value >= 3.5 ? "bi-star-half" : "bi-star"}></i>
            </span>

            <span>
                <i style = {{color}}
                className={value >= 5 ? "bi-star-fill" : value >= 4.5 ? "bi-star-half" : "bi-star"}></i>
            </span>

        </div>
    )
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    color: PropTypes.string,
}

export default Rating