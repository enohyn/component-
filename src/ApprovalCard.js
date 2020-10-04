import React from 'react'

const ApprovalCard=()=>{
    return(
        <div className= "ui card">
            <div className="ui content">Are you sure?</div>
            <div className="extra content">
                <div className="two buttons">
                    <div className=" green button">Accept</div> 
                    <div className="red button"> Reject </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard;