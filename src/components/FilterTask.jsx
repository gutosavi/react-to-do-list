import React from 'react';

const FilterTask = ({ tasks }) => {
  const [filter, setFilter] = React.useState('All');

  const taskFiltered = tasks.filter((task) => {
    if (filter === 'completed') return task.done;
    if (filter === 'pending') return !task.done;
    return true;
  });

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <select
        name="filter"
        id="filter"
        onChange={({ target }) => setFilter(target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <ul>
        {taskFiltered.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterTask;
