const Table = ({ input }) => {
  console.log("input", input);
  return (
    <table className="table-auto bg-white mt-4 border-collapse border border-slate-400">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {input.map((item, index) => (
          <tr key={index}>
            <td>1</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td className="flex gap-1">
              <button className="btn bg-gray-600 hover:bg-blue-500 text-white felx justify-center items-center w-20 rounded">
                delete
              </button>
              <button className="btn bg-gray-600 hover:bg-blue-500 text-white felx justify-center items-center w-20 rounded">
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
