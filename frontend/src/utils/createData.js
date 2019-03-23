let id = 0;
function createData(time, name, priority) {
  id += 1;
  return {
    id,
    time,
    name,
    priority,
  };
}

export default createData;
