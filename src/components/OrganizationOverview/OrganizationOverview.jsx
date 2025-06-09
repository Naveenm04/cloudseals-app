import React, { useState } from 'react';
import InfoCard from './InfoCard';
import ResourceTable from './ResourceTable';
import { resourceData } from '../../data/resources';
import AssignmentRulesTable from '../AssignmentRules/AssignmentRulesTable';
import { List, PlusCircle, BarChart3, Trash2 } from 'lucide-react';

const OrganizationOverview = () => {
  const [showAssignmentRules, setShowAssignmentRules] = useState(false);

  const handleToggleAssignmentRules = () => {
    setShowAssignmentRules(true); // always show table on click
  };

  const handleBackToOverview = () => {
    setShowAssignmentRules(false); // 👈 go back to overview when back clicked
  };

  return (
    <div className="p-6 space-y-4 bg-white shadow rounded-lg">
      {!showAssignmentRules && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="building">🏢</span> Sunflower Inc
            </h2>
            <div className="flex items-center gap-4">
              <span className="bg-slate-800 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                All
              </span>
              <button
                onClick={handleToggleAssignmentRules}
                className="text-sm text-blue-900 font-medium flex items-center gap-2"
              >
                📝 CONFIGURE ASSIGNMENT RULES
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap gap-4">
            <InfoCard
              title="Spent over limit"
              value="$1.113k"
              subtext="Exceeded limit: 2"
              color="bg-red-100 text-red-700 border border-red-400"
            />
            <InfoCard
              title="Organization limit"
              value="$397.5k"
              color="bg-blue-100 text-blue-700 border border-blue-400"
            />
            <InfoCard
              title="Expenses this month"
              value="$15.306k"
              color="bg-green-100 text-green-700 border border-green-400"
            />
            <InfoCard
              title="Forecast this month"
              value="$117.618k"
              color="bg-green-50 text-green-800 border border-green-300"
            />
            <InfoCard
              title="Possible monthly savings"
              value="$91.131k"
              color="bg-slate-100 text-slate-800 border border-slate-400"
            />
          </div>

          <a href="#" className="text-blue-700 underline text-sm mt-2 block">
            Expand requiring attention
          </a>

          {/* Resource Table */}
          <div className="pt-2 bg-white rounded shadow border p-4">
            <div className="flex items-center gap-2 text-sm font-medium mb-2">
              <span role="img" aria-label="building">🏢</span> Sunflower Inc
            </div>
            <table className="w-full text-sm">
              <thead className="text-left border-b">
                <tr>
                  <th className="py-2">Name</th>
                  <th>Limit</th>
                  <th>Expenses this month</th>
                  <th>Forecast this month</th>
                  <th>Owner</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 flex items-center gap-2">
                    <span role="img" aria-label="building">🏢</span> Sunflower Inc
                  </td>
                  <td>$397,500</td>
                  <td>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold block w-fit">
                      $15,305.73
                    </span>
                  </td>
                  <td>$117,618.18</td>
                  <td>Demo User</td>
                  <td className="flex gap-2 items-center">
                    <PlusCircle size={16} />
                    <List size={16} />
                    <BarChart3 size={16} />
                    <Trash2 size={16} className="text-gray-400" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-sm pt-2">Total: <strong>21</strong></div>
          </div>
        </>
      )}

      {showAssignmentRules && <AssignmentRulesTable onBack={handleBackToOverview} />}
    </div>
  );
};

export default OrganizationOverview;
