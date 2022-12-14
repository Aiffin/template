import React, { useState } from 'react'

function Test() {
    const [inf,setinf]=useState("HEE")

    const handl=()=>{
        setinf("did you or a family member who lived with youexperience any serious health issue")
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <b><p className='text-center'>Take this short quick if you qualify</p></b>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card border-0 info">
                    <div className="card-body">
                    <p>{inf}</p>
                    <div class="d-grid gap-2">
                        <button className="btn btn-warning" onClick={handl} type="button">Yes</button>
                        <button className="btn btn-warning" type="button">No</button>
                    </div>
                    </div>
                </div>
                 
            </div>
        </div>
    </div>
  )
}

export default Test