import React, { useState } from 'react';
import InfoCard from './InfoCard';
import ResourceTable from './ResourceTable';
import AssignmentRulesTable from '../AssignmentRules/AssignmentRulesTable';
import { List, PlusCircle, BarChart3, Trash2, ClipboardList } from 'lucide-react';
import './OrganizationOverview.css'; // custom CSS

const OrganizationOverview = () => {
  const [showAssignmentRules, setShowAssignmentRules] = useState(false);

  const handleToggleAssignmentRules = () => {
    setShowAssignmentRules(true);
  };

  const handleBackToOverview = () => {
    setShowAssignmentRules(false);
  };

  return (
    <div className="organization-container">
      {!showAssignmentRules ? (
        <>
          <div className="header">
            <h2 className="company-name">
              <ClipboardList size={20} className="icon" />
              Sunflower Inc
            </h2>
            <div className="header-right">
              <span className="badge">All</span>
              <button onClick={handleToggleAssignmentRules} className="assignment-btn">
                <ClipboardList size={16} />
                CONFIGURE ASSIGNMENT RULES
              </button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="cards">
            <div className="card-group">
              <InfoCard
                title="Spent over limit"
                value="$1.113k"
                subtext="Exceeded limit: 2"
                color="red"
              />
            </div>
            <InfoCard title="Organization limit" value="$397.5k" color="blue" />
            <InfoCard title="Expenses this month" value="$15.306k" color="green" />
            <InfoCard title="Forecast this month" value="$117.618k" color="green-light" />
            <InfoCard title="Possible monthly savings" value="$91.131k" color="slate" />
          </div>

          <a href="#" className="attention-link">Expand requiring attention</a>

          {/* Resource Table */}
          <div className="resource-table">
            <div className="table-header">
              <ClipboardList size={16} /> Sunflower Inc
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Limit</th>
                  <th className="sortable">Expenses this month</th>
                  <th>Forecast this month</th>
                  <th>Owner</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ClipboardList size={16} className="inline-icon" /> Sunflower Inc
                  </td>
                  <td>$397,500</td>
                  <td>
                    <span className="amount-green">$15,305.73</span>
                  </td>
                  <td>$117,618.18</td>
                  <td>Demo User</td>
                  <td className="action-icons">
                    <PlusCircle size={16} />
                    <List size={16} />
                    <BarChart3 size={16} />
                    <Trash2 size={16} className="disabled-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="total">Total: <strong>21</strong></div>
          </div>
        </>
      ) : (
        <AssignmentRulesTable onBack={handleBackToOverview} />
      )}
    </div>
  );
};

export default OrganizationOverview;
