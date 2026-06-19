import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (fetchError) {
        setError(`Failed to fetch users: ${fetchError.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              <b>{user.name}</b>
            </p>
            <p>{user.email}</p>
            <Link to={`/user-todos/${user.id}`}>View Todos</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
