import React, { useState } from 'react';
import { Data } from './Data';

export const Singer = () => {
    const[item,useItem]=useState(Data);
  return (
    <>
    {item.map((e)=>(
        <>
        <table class="table">
        <tr>
         <td scope="row" key={e.id}>{e.name}</td>
         <td key={e.id}>{e.year}</td>
        </tr>
        </table>
        </>
    ))}
    
    </>
  )
}
