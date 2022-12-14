import React,{useState} from 'react'
import Test from './Test'

function Confirm() {
    const [info,setinfo]=useState("Did you or a loved one serve,live or work at camp lejeune for at least 30days between 1935 and 1987")

    const handle=()=>{
        setinfo("did you or a family member who lived with youexperience any serious health issue")
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
                    <p>{info}</p>
                    <div class="d-grid gap-2">
                        <button className="btn btn-warning" onClick={handle} type="button">Yes</button>
                        <button className="btn btn-warning" type="button">No</button>
                    </div>
                    </div>
                </div>
                 
            </div>
        </div>
        <br></br>
        <hr />
    </div>
  )
}

export default Confirm