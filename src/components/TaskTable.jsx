const TaskTable = () => {
  const tasks = [
    {
      name: 'House Prices',
      status: 'Completed',
      time: '1 week ago',
      metrics: {
        accuracy: '70.28 / 60',
        dataLoss: '0.79 / 1.1',
        iter: '57,600 / 3'
      }
    },
    {
      name: 'Digit Recognizer',
      status: 'Completed',
      time: '1 week ago',
      metrics: {
        iter: '57,600 / 3',
        dataLoss: '0.78 / 1.1',
        epochs: '10 / 9'
      }
    },
    {
      name: 'Flower Classification',
      status: 'Completed',
      time: '1 week ago',
      metrics: {
        accuracy: '70.63 / 60',
        dataLoss: '0.79 / 1.1',
        iter: '57,600 / 3',
        epochs: '10 / 9'
      }
    }
  ];

  return (
    <div className="dashboard-panel">
      <h2>Tasks ↗</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Last run</th><th>Metrics ❓</th></tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr key={idx}>
              <td>{task.name}</td>
              <td>✅ {task.status}<br />{task.time}</td>
              <td>
                {Object.entries(task.metrics).map(([k, v]) => (
                  <div key={k}><b>{k}:</b> {v}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total: {tasks.length}</div>
    </div>
  );
};

export default TaskTable;
