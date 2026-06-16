import useFetch from "../hooks/useFetch";

function User() {

  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <p className="text-lg font-medium text-blue-600">
          Loading data...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center mt-20">
        <p className="text-red-500 text-lg">
          Error: {error}
        </p>
      </div>
    );
  }

  return (

    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Users
      </h1>
      {data.map((user) => (
        <div key={user.id} className="border p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold">
            {user.name}
          </h2>
          <p className="text-gray-600">
            {user.email}
          </p>
        </div>
      ))
      }
    </div>
  );
}

export default User;