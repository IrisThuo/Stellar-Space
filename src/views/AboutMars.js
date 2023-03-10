import React, { useEffect, useState } from "react";




function AboutMars(props) {
  const [sol_hours, setSol_Hours] = useState([]);
  const [solRequired, setSol_Required] = useState([]);
  const [solChecked, setSol_Checked] = useState([]);

  useEffect(
    () => {
      fetch(
        "https://api.nasa.gov/insight_weather/?api_key=fzSdG2XbOJj2lUZxdX3IBaW0nzQGpjVRId40l7C1&feedtype=json&ver=1.0"
      )
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          const customData = data.validity_checks["1219"];
          const hoursData = data.validity_checks;

          setSol_Hours(customData.AT.sol_hours_with_data);
          setSol_Hours(customData.HWS.sol_hours_with_data);
          setSol_Hours(customData.PRE.sol_hours_with_data);
          setSol_Hours(customData.WD.sol_hours_with_data);

          const requiredData = data.validity_checks;

          setSol_Required(hoursData.sol_hours_required);

          const checkedData = data.validity_checks;
          setSol_Checked(hoursData.sols_checked);
        });
    },
    []
  );

  return (
    <div >
   
      <h1 style={{textAlign: "center",color: "#b8c0ff"}}>Weather On Planet Mars</h1>
     <div style={{
      display: "flex",
      justifyContent: "space-between"
    }} >
      <div 
      style={{ 
        borderRadius: "8px",
         boxShadow: "0px 0px 8px #ccc",
        color: "#253b56",
        margin: "12px 0px",
        padding: "4px 16px 20px 16px"
  }}>
        <h4>ATMOSPHERIC TEMPERATURE</h4>
        {sol_hours.map(soul => (
          <p key={soul}>{soul}</p>
        ))}
      </div>
      <div 
      style={{ 
        borderRadius: "8px",
         boxShadow: "0px 0px 8px #ccc",
        color: "#253b56",
        margin: "12px 0px",
        padding: "4px 16px 20px 16px"
  }}>
      <h4>HORIZONTAL WIND PRESSURE</h4>
        {sol_hours.map(soul => (
          <p key={soul}>{soul}</p>
        ))}
      </div>
      <div 
      style={{ 
        borderRadius: "8px",
         boxShadow: "0px 0px 8px #ccc",
        color: "#253b56",
        margin: "12px 0px",
        padding: "4px 16px 20px 16px"
  }}>
    <h4>ATMOSPHERIC PRESSURE</h4>
        {sol_hours.map(soul => (
          <p key={soul}>{soul}</p>
        ))}
      </div>
      <div 
      style={{ 
        borderRadius: "8px",
         boxShadow: "0px 0px 8px #ccc",
        color: "#253b56",
        margin: "12px 0px",
        padding: "4px 16px 20px 16px"
  }}>
    <h4>WIND DIRECTION</h4>
        {sol_hours.map(soul => (
          <p key={soul}>{soul}</p>
        ))}
     </div> 
     </div> 
     
    </div>

  );
}

export default AboutMars;
