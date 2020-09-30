import React, { useState, useEffect } from "react";
import Zoom from "react-reveal"

import Header from "./Header"
import MapGrid from "./MapGrid"
import InfoBar from "./InfoBar"
import Footer from "./Footer"
import Loading from "./Loading"

function App() {
  const urlWitoutQuestionMark = window.location.href.split("?")[0]
  window.history.pushState({}, "", urlWitoutQuestionMark);
  const apiUrl = `${urlWitoutQuestionMark}api/`;
  const mapSrc = "../../static/img/map.png";
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState([]);
  let yearsList = [...new Set(jsonData.map(item => item.yyyymmdd.slice(0,4)))].reverse();
  const deathsList = ["all cases", "0", "1-10", "11-100", "101-1000", "1001-10000", "bigger than 10000", "no data"];
  const [yearValue, setYearValue] = useState();  
  const [deathValue, setDeathValue] = useState(deathsList[0]); 
  const [selectedPointId, setPointId] = useState();

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(json => { 
      setJsonData(json);
      yearsList = [...new Set(json.map(item => item.yyyymmdd.slice(0,4)))].reverse();
      setYearValue(yearsList[0]);
      setLoading(true);
    }) 
  }, []);

  return (
    loading ?
    <div id="rootWrapper">
      <Zoom>
        <Header 
          jsonData={jsonData} 
          yearValue={yearValue}
          yearsList={yearsList}
          setYearValue={setYearValue}
          deathValue={deathValue}
          deathsList={deathsList}
          setDeathValue={setDeathValue}
          selectedPointId={selectedPointId}
        />
        <MapGrid 
          src={mapSrc} 
          jsonData={jsonData}
          yearValue={yearValue}
          deathValue={deathValue}
          setPointId={setPointId}
          selectedPointId={selectedPointId}
        />  
        <InfoBar 
          jsonData={jsonData}
          yearValue={yearValue}
          selectedPointId={selectedPointId}
        />
        <div className="clearFloat"></div>
      </Zoom>
      <Footer />
    </div>    
    : <Loading />
  )
}

export default App;