import React, { useState, useEffect } from "react";

export const D8 = () => {
  const [msg, setmsg] = useState("Hello EveryOne, It's Ram Here!");

  useEffect(() => {
    console.log("useEffect called..");
    setTimeout(() => {
      setmsg("OOPS! TIMEOUT");
    }, 2000);
  });

  
  return (
    <>
      <p>{msg}</p>
    </>
  );
};
