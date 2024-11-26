import React from 'react'
import "./Profile.css"

export default function Profile(props) {
    return (
        <div>
            <div className="profileCard">
                <img src={props.image} className="profileImage" alt="..." />
                <h5 className="profileHeading" >{props.heading} </h5>
                <div className="profileLinks" >
                </div>
            </div>
        

        </div>
    )
}
