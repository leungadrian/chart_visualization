import './App.css'

// import plotly from "plotly.js-dist-min";
import Plot from "./components/NewPlot";


function App() {
  // const body = document.getElementById("body");
  // const dom = document.createElement("div");
  const data: Plotly.Data[] = [{
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    type: 'scatter' as const
  }];
  
  // const layout = {
  //   title: 'Sales Growth',
  //   xaxis: {
  //     title: 'Year',
  //     showgrid: false,
  //     zeroline: false
  //   },
  //   yaxis: {
  //     title: 'Percent',
  //     showline: false
  //   }
  // };
  // const test = plotly.newPlot(dom, data, layout);
  // console.log(dom);
  // console.log(test);
  // body?.appendChild(test);
  


  return (
    <>
      <div>
      

      <h1>Title</h1>
      <Plot data={data}></Plot>
      </div>
      


    </>
  )
}

export default App
