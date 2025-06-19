// // src/components/Sidebar/Sidebar.jsx
// import React, { useState } from 'react';
// import './Sidebar.css';
// import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

// const Sidebar = ({ isOpen }) => {
//   const [openSections, setOpenSections] = useState({});

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//       <ul className="sidebar-menu">
//         <li className="section-title">Main</li>
//         <li>Dashboard Overview</li>

//         <li onClick={() => toggleSection('cloudResources')}>
//           <span className="section-toggle">
//             {openSections.cloudResources ? <FaChevronDown /> : <FaChevronRight />}
//             Cloud Resources
//           </span>
//           {openSections.cloudResources && (
//             <ul className="submenu">
//               <li>Compute</li>
//               <li>Storage</li>
//               <li>Databases</li>
//               <li>Network</li>
//             </ul>
//           )}
//         </li>

//         <li>AI Agents</li>
//         <li>Workflows / Automations</li>
//         <li>Cost Optimization</li>
//         <li>Compliance & Security</li>
//         <li>Bias / Fairness Analytics</li>
//         <li>AgentOps (Monitoring & Health)</li>
//         <li>Audit Logs</li>
//         <li>Settings</li>

//         <li onClick={() => toggleSection('admin')}>
//           <span className="section-toggle">
//             {openSections.admin ? <FaChevronDown /> : <FaChevronRight />}
//             Admin (if admin role)
//           </span>
//           {openSections.admin && (
//             <ul className="submenu">
//               <li>User Management</li>
//               <li>Org Settings</li>
//               <li>Billing</li>
//             </ul>
//           )}
//         </li>

//         <li className="section-title">Sticky Footer</li>
//         <li>Feedback/Support</li>
//         <li>Dark/Light mode toggle</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
