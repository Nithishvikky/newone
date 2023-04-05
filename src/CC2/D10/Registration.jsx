import React, { useState } from 'react';
import Submitted from './Submitted';


export default function Registration() {

    const [state, setState] = useState(false);
    const [Details, setDetails] = useState({
        fName: "",
        lName: "",
        email: "",
        phoneNo:"",
        passport:"",
        startDate:"",
        endDate:"",
        destination:"",
        reasonForTravel:""
    })

  console.log(Details);


    function handleChange(e) {
        const { name, value } = e.target;
        setDetails(prev => {
            return { ...prev, [name]: value };
        })
    }


    function handleClick() {
        setState(!state);
    }


    return (
        <>
            {state ? <Submitted startDate={Details.startDate} endDate={Details.endDate} destination={Details.destination} reasonForTravel={Details.reasonForTravel} fName={Details.fName} passport={Details.passport} phoneNo={Details.phoneNo} lName={Details.lName} email={Details.email} /> : <div class="big-light ">

                <div class="container">
                    <div class=" py-4 text-center">
                        <h2 >Registration form</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-5 order-md-1">
                            <form class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col mb-2">
                                        <label for="firstName">First name</label>
                                        <input type="text" onChange={handleChange} class="form-control" name="fName" value={Details.fName} required></input>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName">Last name</label>
                                        <input type="text" onChange={handleChange} class="form-control" name="lName" value={Details.lName} required></input>

                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="email">Email-Address</label>
                                    <input type="email" onChange={handleChange} class="form-control" name="email" placeholder="you@example.com" value={Details.email} required></input>
                                </div>

                                <div class="col-md-5 mb-3">
                                    <label >Phone No:</label>
                                    <input type="number"  onChange={handleChange} class="form-control" name="phoneNo" value={Details.phoneNo} placeholder="" ></input>
                                </div>


                                <div class="col-md-5 mb-3">
                                    <label >Passport</label>
                                    <input type="text" onChange={handleChange} class="form-control" name='passport' value={Details.passport} placeholder=""  required></input>
                                </div>


                                <div class="row mb-3">
                                    <div class="col-lg-4 col-sm-6">
                                        <label for="startDate">Travel-date</label>
                                        <input name="startDate" onChange={handleChange} value={Details.startDate} class="form-control" type="date" required />
                                        <span id="startDateSelected"></span>
                                    </div>

                                    <div class="col-lg-4 col-sm-6">
                                        <label for="endDate">Return-date</label>
                                        <input name="endDate" onChange={handleChange} value={Details.endDate} class="form-control" type="date" required />
                                        <span id="endDateSelected"></span>
                                    </div>
                                </div>

                                <div class="col-md-8 mb-3">
                                    <label for="zip">Destination</label>
                                    <input type="text" class="form-control" onChange={handleChange} value={Details.destination} name="destination" placeholder="" required></input>

                                </div>

                                <div class="form-group col-md-5 mb-4">
                                    <label for="exampleFormControlTextarea1">Reason for travel</label>
                                    <textarea class="form-control" onChange={handleChange} id="exampleFormControlTextarea1" name='reasonForTravel' value={Details.reasonForTravel} rows="3" required></textarea>
                                </div>


                                <button onClick={handleClick} class="btn btn-primary btn-md btn-block mb-3" type="submit" >Submit</button>
                            </form>
                        </div>
                    </div>


                </div>
            </div>}


        </>
    );
}