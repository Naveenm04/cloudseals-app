import React from 'react';
import ResourcesDashboard from './ResourcesDashboard/ResourcesDashboard';
import ExpensesChart from '../components/ExpensesChart/ExpensesChart';
// import ExpenseChart from './components/ExpenseChart';
// import ExpenseChart from './ExpenseChart';



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

      {/* Row 2: Organization and Resource Expenses */}
    </div>
  );
};

export default Resources;
