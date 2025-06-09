const rules = [
  {
    name: "Short living instances",
    assign: { icon: "⚙️", team: "Daily checks", user: "Robert Gagnon" },
    conditions: "Name/ID contains: <strong>short-living</strong>",
    priority: 1,
  },
  {
    name: "Marketing devices",
    assign: { icon: "📈", team: "Clicks research", user: "Jessica Bond" },
    conditions: "Name/ID contains: <strong>migration</strong>",
    priority: 2,
  },
  {
    name: "QA clusters",
    assign: { icon: "🧪", team: "QA", user: "Isla Rodriguez" },
    conditions: "Name/ID contains: <strong>cluster</strong>",
    priority: 3,
  },
  {
    name: "jenkins dev",
    assign: { icon: "🛠️", team: "Dev", user: "Jacob Jones" },
    conditions: "Name/ID contains: <strong>jenkins</strong>",
    priority: 4,
  },
  {
    name: "discovery scheduler",
    assign: { icon: "🔍", team: "discovery", user: "Jack Jackson" },
    conditions: 'Tag value starts with: <strong>{"app":"resource-discovery-scheduler-"}</strong>',
    priority: 5,
  },
  // Add more rules as needed...
];

export { rules as default };
