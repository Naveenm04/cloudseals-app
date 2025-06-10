import React, { useState } from 'react';
import rules from '../../data/assignmentRulesData';
import './AssignmentRules.css';
import { ArrowUp, ArrowDown, Edit, Trash } from 'lucide-react';

const PAGE_SIZE = 5;

const AssignmentRulesTable = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rules.length / PAGE_SIZE);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const paginatedRules = rules.slice(startIdx, startIdx + PAGE_SIZE);

  const handleAddRule = () => {
    alert('Add Rule Clicked. (This is dummy logic — replace with form/modal)');
  };

  const handleReapplyRuleset = () => {
    alert('Re-Apply Ruleset Clicked. (This is dummy logic — add API call or logic here)');
  };

  const handleEdit = (ruleName) => {
    alert(`Edit clicked for: ${ruleName}`);
  };

  const handleDelete = (ruleName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete: ${ruleName}?`);
    if (confirmDelete) {
      alert(`Deleted: ${ruleName} (This is dummy logic — implement actual delete)`);
    }
  };

  const handleMoveUp = (ruleName) => {
    alert(`Move Up clicked for: ${ruleName} (Reorder logic to be implemented)`);
  };

  const handleMoveDown = (ruleName) => {
    alert(`Move Down clicked for: ${ruleName} (Reorder logic to be implemented)`);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="assignment-rules-wrapper">
      <button className="btn-outline mb-4" onClick={onBack}>
        ← Go Back to Overview
      </button>

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Assignment Rules</h3>
        <div className="flex gap-2">
          <button className="btn-green" onClick={handleAddRule}>+ ADD</button>
          <button className="btn-outline" onClick={handleReapplyRuleset}>RE-APPLY RULESET</button>
        </div>
      </div>

      <table className="assignment-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Assign to</th>
            <th>Conditions</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedRules.map((rule, idx) => (
            <tr key={idx}>
              <td>{rule.name}</td>
              <td>
                <div className="assign-info">
                  <span className="assign-icon">{rule.assign.icon}</span>
                  <div>
                    <div className="assign-team font-semibold text-blue-800">{rule.assign.team}</div>
                    <div className="assign-user text-xs text-gray-500">{rule.assign.user}</div>
                  </div>
                </div>
              </td>
              <td dangerouslySetInnerHTML={{ __html: rule.conditions }}></td>
              <td className="text-center">{rule.priority}</td>
              <td>
                <div className="action-icons flex gap-1 justify-center">
                  <ArrowUp size={16} className="cursor-pointer" onClick={() => handleMoveUp(rule.name)} />
                  <ArrowDown size={16} className="cursor-pointer" onClick={() => handleMoveDown(rule.name)} />
                  <Edit size={16} className="cursor-pointer" onClick={() => handleEdit(rule.name)} />
                  <Trash size={16} className="text-red-600 cursor-pointer" onClick={() => handleDelete(rule.name)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination-controls mt-4 flex justify-center gap-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn-outline">
          Previous
        </button>
        <span className="text-sm font-medium text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn-outline">
          Next
        </button>
      </div>
    </div>
  );
};

export default AssignmentRulesTable;
