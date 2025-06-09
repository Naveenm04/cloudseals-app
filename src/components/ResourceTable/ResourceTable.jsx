// src/components/ResourceTable/ResourceTable.jsx
import React, { useState } from 'react';
import ResourceRow from './ResourceRow';
import Pagination from './Pagination';
import './ResourceTable.css';

const mockData = [
  {
    id: 1,
    name: 'sunflower-eu-fra',
    status: 'Active',
    violations: true,
    expense: 931.13,
    metadata: {
      firstSeen: '03/01/2023',
      lastSeen: '06/11/2025',
    },
    pool: 'AWS HQ',
    owner: 'Demo User',
    type: 'Bucket',
  },
  {
    id: 2,
    name: 'i-082b1a163698b8ede',
    description: 'sunflowerWebSite',
    status: 'Active',
    savings: 5343.53,
    expense: 627.4,
    metadata: {
      firstSeen: '03/01/2023',
      lastSeen: '06/11/2025',
      imageId: 'ami-09d7e4ccf2c68700d',
    },
    pool: 'AWS Marketing',
    owner: 'Lena Potter',
    type: 'Instance',
  },
  {
    id: 3,
    name: '48417205-051c-47d9-b8b5-c6c473a84556',
    description: 'mongo-0',
    status: 'Active',
    expense: 434.08,
    metadata: {
      firstSeen: '05/08/2025',
      lastSeen: '06/04/2025',
      hostIp: '91.121.229.212',
    },
    pool: 'K8s dev',
    owner: 'Elly Wilson',
    type: 'K8s Pod',
  },
  {
    id: 4,
    name: 'i-0e464cfbf9650bd21',
    description: 'finops-practice',
    status: 'Active',
    savings: 5758.33,
    expense: 344.36,
    metadata: {
      firstSeen: '03/01/2023',
      lastSeen: '06/11/2025',
      imageId: 'ami-0896ae01b544f65a8',
    },
    pool: 'AWS Marketing',
    owner: 'Lena Potter',
    type: 'Instance',
  },
  {
    id: 5,
    name: 'sunflower-infra-backup',
    status: 'Active',
    expense: 343.52,
    metadata: {
      firstSeen: '05/03/2023',
      lastSeen: '06/11/2025',
    },
    pool: 'AWS HQ',
    owner: 'Demo User',
    type: 'Bucket',
  },
  {
    id: 6,
    name: 'infra-storage-01',
    status: 'Active',
    expense: 299.99,
    metadata: {
      firstSeen: '01/02/2024',
      lastSeen: '06/10/2025',
    },
    pool: 'Storage Pool',
    owner: 'John Smith',
    type: 'Disk',
  },
  {
    id: 7,
    name: 'cluster-analytics',
    description: 'big data workload',
    status: 'Active',
    expense: 511.2,
    metadata: {
      firstSeen: '11/01/2023',
      lastSeen: '06/11/2025',
    },
    pool: 'Data Team',
    owner: 'Alice Johnson',
    type: 'Cluster',
  },
  {
    id: 8,
    name: 'app-backend-service',
    description: 'API compute instance',
    status: 'Active',
    expense: 412.75,
    metadata: {
      firstSeen: '02/15/2024',
      lastSeen: '06/10/2025',
      imageId: 'ami-07b9e7ecf4a4f787c',
    },
    pool: 'Backend Services',
    owner: 'David Roe',
    type: 'Instance',
  },
  {
    id: 9,
    name: 'testing-environment',
    status: 'Active',
    expense: 123.45,
    metadata: {
      firstSeen: '03/03/2023',
      lastSeen: '06/11/2025',
    },
    pool: 'QA',
    owner: 'Sara Bell',
    type: 'Environment',
  },
  {
    id: 10,
    name: 'archive-bucket-2024',
    status: 'Active',
    violations: false,
    expense: 98.2,
    metadata: {
      firstSeen: '01/20/2024',
      lastSeen: '06/10/2025',
    },
    pool: 'Archival',
    owner: 'Tommy Nguyen',
    type: 'Bucket',
  },

  {
    id: 11,
    name: 'archive-bucket-2024',
    status: 'Active',
    violations: false,
    expense: 98.2,
    metadata: {
      firstSeen: '01/20/2024',
      lastSeen: '06/10/2025',
    },
    pool: 'Archival',
    owner: 'Tommy Nguyen',
    type: 'Bucket',
  },
  {
    id: 12,
    name: 'archive-bucket-2024',
    status: 'Active',
    violations: false,
    expense: 98.2,
    metadata: {
      firstSeen: '01/20/2024',
      lastSeen: '06/10/2025',
    },
    pool: 'Archival',
    owner: 'Tommy Nguyen',
    type: 'Bucket',
  },
  {
    id: 13,
    name: 'archive-bucket-2024',
    status: 'Active',
    violations: false,
    expense: 98.2,
    metadata: {
      firstSeen: '01/20/2024',
      lastSeen: '06/10/2025',
    },
    pool: 'Archival',
    owner: 'Tommy Nguyen',
    type: 'Bucket',
  },
   {
    id: 14,
    name: 'archive-bucket-2024',
    status: 'Active',
    violations: false,
    expense: 98.2,
    metadata: {
      firstSeen: '01/20/2024',
      lastSeen: '06/10/2025',
    },
    pool: 'Archival',
    owner: 'Tommy Nguyen',
    type: 'Bucket',
  },
   {
    id: 15,
    name: 'archive-bucket-2024',
    status: 'Active',
    violations: false,
    expense: 98.2,
    metadata: {
      firstSeen: '01/20/2024',
      lastSeen: '06/10/2025',
    },
    pool: 'Archival',
    owner: 'Tommy Nguyen',
    type: 'Bucket',
  },
   {
    id: 16,
    name: 'archive-bucket-2024',
    status: 'Active',
    violations: false,
    expense: 98.2,
    metadata: {
      firstSeen: '01/20/2024',
      lastSeen: '06/10/2025',
    },
    pool: 'Archival',
    owner: 'Tommy Nguyen',
    type: 'Bucket',
  }
];

const ResourceTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="resource-table-container">
      <div className="table-header">
        <div>Resource</div>
        <div>Expenses (Jun 01 - Jun 04)</div>
        <div>Paid network traffic</div>
        <div>Metadata</div>
        <div>Pool / Owner</div>
        <div>Type</div>
      </div>
      {currentItems.map(item => (
        <ResourceRow key={item.id} resource={item} />
      ))}
      <Pagination
        totalItems={mockData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ResourceTable;