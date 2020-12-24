import React from "react"

const NomineeCard = props => {
    return(
        <div className = "nominee-div">
            <img alt="" src={props.image} /> {/* need to edit */}
            <h5>{props.title}</h5>
            <h6>{props.genre}</h6>
            <h6>{props.year_released}</h6>
        </div>
    )
}

export default NomineeCard