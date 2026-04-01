import React from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement} from "chart.js";

ChartJS.register(CategoryScale,LinearScale,BarElement);

function Charts(){

const data={
labels:["Jan","Feb","Mar","Apr","May"],
datasets:[
{
label:"Sales",
data:[100,300,250,400,500],
backgroundColor:"blue"
}
]
}

return(

<div className="card p-3 shadow">

<h4>Analytics</h4>

<Bar data={data}/>

</div>

)

}

export default Charts;