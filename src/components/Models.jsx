import React from 'react';
import ResourcesDashboard from './ResourcesDashboard/ResourcesDashboard';
import ExpensesChart from '../components/ExpensesChart/ExpensesChart';
// import ResourceUsageTable from "./ResourceTable/ResourceTable";
import ResourceTable from './ResourceTable/ResourceTable';


const Resources = () => {
  return(
    <div className="dashboard-wrapper">
      {/* Row 1: Models and Tasks */}
      <div className="dashboard-container">
        <div className="dashboard-columns">
          <ResourcesDashboard/>
        </div>
      </div>

       <div className="dashboard-container">
        <div className="dashboard-columns">
       {/* <ExpenseChart /> */}
        {/* <ResourcesDashboard/> */}
         <ExpensesChart />
        </div>
      </div>

      
       <div className="dashboard-container">
        <div className="dashboard-columns">
         <ResourceTable />
        </div>
      </div>


      {/* Row 2: Organization and Resource Expenses */}
    </div>
  );
};

export default Resources;
