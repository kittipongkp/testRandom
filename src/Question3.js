import React from "react";

function Question3() {
    const [counterA, setCounterA] = React.useState(0);
    const [counterB, setCounterB] = React.useState(0);
  
    React.useEffect(() => {
       console.log("counterA: "+ counterA)
      }, [counterA]);

      React.useEffect(() => {
        console.log("counterB: "+ counterB)
       }, [counterB]);
  
    return (
      <div>
        <button
          onClick={() => setCounterA(counterA + 1)}
        >
          A
        </button>
        <button
          onClick={() => setCounterB(b => b + 1)}
        >
          B
        </button>
      </div>
    );
  }

export default Question3;
