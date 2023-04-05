import React from 'react';

export default function Submitted(props) {
  return (
    <div>
      <ul>
        <li>First Name : {props.fName}</li>
        <li>Last Name : {props.lName}</li>
        <li>E-mail : {props.email}</li>
        <li>Phone No:{props.phoneNo}</li>
        <li>Passport :{props.passport}</li>
        <li>Start date:{props.startDate}</li>
        <li>End Date:{props.endDate}</li>
        <li>Destination :{props.destination}</li>
        <li>Reason For Travel:{props.reasonForTravel}</li>
      </ul>

    </div>
  )
}