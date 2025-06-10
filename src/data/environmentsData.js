const environments = [
  {
    name: "dev-1",
    type: "Linux VM",
    pool: "QA",
    status: "AVAILABLE",
    user: "Alice",
    until: "2025-06-09",
    jira: ["JIRA-123", "JIRA-456"],
    software: "Ubuntu 20.04",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  },
  {
    name: "dev-2",
    type: "Windows Server",
    pool: "DevOps",
    status: "IN-USE",
    user: "Bob",
    until: "2025-06-09",
    jira: ["JIRA-789"],
    software: "Windows 10",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  },
  {
    name: "dev-1",
    type: "Linux VM",
    pool: "QA",
    status: "AVAILABLE",
    user: "Alice",
    until: "2025-06-09",
    jira: ["JIRA-123", "JIRA-456"],
    software: "Ubuntu 20.04",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  },
  {
    name: "dev-2",
    type: "Windows Server",
    pool: "DevOps",
    status: "IN-USE",
    user: "Bob",
    until: "2025-06-09",
    jira: ["JIRA-789"],
    software: "Windows 10",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  },
  {
    name: "dev-1",
    type: "Linux VM",
    pool: "QA",
    status: "AVAILABLE",
    user: "Alice",
    until: "2025-06-09",
    jira: ["JIRA-123", "JIRA-456"],
    software: "Ubuntu 20.04",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  },
  {
    name: "dev-2",
    type: "Windows Server",
    pool: "DevOps",
    status: "IN-USE",
    user: "Bob",
    until: "2025-06-09",
    jira: ["JIRA-789"],
    software: "Windows 10",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  },
  {
    name: "dev-1",
    type: "Linux VM",
    pool: "QA",
    status: "AVAILABLE",
    user: "Alice",
    until: "2025-06-09",
    jira: ["JIRA-123", "JIRA-456"],
    software: "Ubuntu 20.04",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  },
  {
    name: "dev-2",
    type: "Windows Server",
    pool: "DevOps",
    status: "IN-USE",
    user: "Bob",
    until: "2025-06-09",
    jira: ["JIRA-789"],
    software: "Windows 10",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  },
  {
    name: "dev-1",
    type: "Linux VM",
    pool: "QA",
    status: "AVAILABLE",
    user: "Alice",
    until: "2025-06-09",
    jira: ["JIRA-123", "JIRA-456"],
    software: "Ubuntu 20.04",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  },
  {
    name: "dev-2",
    type: "Windows Server",
    pool: "DevOps",
    status: "IN-USE",
    user: "Bob",
    until: "2025-06-09",
    jira: ["JIRA-789"],
    software: "Windows 10",
    bookings: [{ start: "2025-06-01", end: "2025-06-07" }, { start: "2025-06-08", end: "2025-06-14" }]
  }
];

export default environments;
