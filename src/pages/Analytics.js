import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Analytics({logout,toggleDark}){

  const overview = [
    { title:"Total Users", value:"8,420", change:" +7.4%" },
    { title:"Monthly Revenue", value:"$42,500", change:" +4.1%" },
    { title:"Active Sessions", value:"1,975", change:" -1.2%" },
    { title:"Bounce Rate", value:"28.3%", change:" -2.3%" }
  ];

  const recent = [
    { metric:"New signups", amount:120, trend:"up" },
    { metric:"Paid conversions", amount:54, trend:"up" },
    { metric:"Churned users", amount:6, trend:"down" },
    { metric:"Support tickets", amount:15, trend:"up" }
  ];

return(
  <div>
    <Navbar logout={logout} toggleDark={toggleDark}/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"><Sidebar/></div>
        <div className="col-md-10 p-4 main-content">
          <h2>Analytics</h2>
          <p>Dashboard summary with key business metrics and recent trends.</p>

          <div className="row g-3 mb-4">
            {overview.map((item,index)=>(
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="card p-3 shadow-sm" style={{borderLeft:'4px solid #5a34f8'}}>
                  <small className="text-muted">{item.title}</small>
                  <h3 className="mt-1">{item.value}</h3>
                  <span className={item.change.includes('+') ? 'text-success' : 'text-danger'}>{item.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-3 shadow-sm mb-4">
            <h5>Recent performance</h5>
            <div className="table-responsive">
              <table className="table table-sm align-middle">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Amount</th>
                    <th>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((item,index)=>(
                    <tr key={index}>
                      <td>{item.metric}</td>
                      <td>{item.amount}</td>
                      <td>
                        <span className={item.trend==='up' ? 'text-success' : 'text-danger'}>
                          {item.trend === 'up' ? '▲' : '▼'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-3 shadow-sm">
            <h5>Insights</h5>
            <ul>
              <li>Conversion rate increased by 3.8% compared to last week.</li>
              <li>Most active user segment: 25-34 with 41% growth.</li>
              <li>Referral traffic has the highest engagement time (6m 12s).</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
)
}

export default Analytics;