import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function App() {
  let rawdata = document.location.href.split("?")[1] || ""
  let rawparams = rawdata.split("&")
  let params = {}
  let isError = false
  let error = <div className="error"></div>
  rawparams.forEach(elem=>{
    let paramdata = elem.split("=")
    params[paramdata[0]] = paramdata[1]
  })
  if(params["url"]==undefined){
    document.location.assign("https://wwf-jr.netlify.app")
  }
  if(params["error"]!=undefined){
    isError = true
    error = <div className="error">{params["error"].replaceAll("+", " ")}</div>
  }
  return ( 
    <>
    <iframe src={`https://3dviewer.net/embed.html#model=${params["url"]}`}></iframe>
    {isError && error}
    <a href={`https://wwf-jr.netlify.app/app/run/viewar?url=${params["url"]}`} target="_blank" className="showAR">See this in Real World</a>
    </>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
)
