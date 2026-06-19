import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserTodos() {
	const { userId } = useParams();
	const [todos, setTodos] = useState([]);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUserAndTodos = async () => {
			try {
				const userResponse = await axios.get(
					`https://jsonplaceholder.typicode.com/users/${userId}`,
				);
				setUser(userResponse.data);

				const todosResponse = await axios.get(
					`https://jsonplaceholder.typicode.com/users/${userId}/todos`,
				);
				setTodos(todosResponse.data);
			} catch (fetchError) {
				setError(`Failed to fetch: ${fetchError.message}`);
			} finally {
				setLoading(false);
			}
		};

		if (userId) {
			fetchUserAndTodos();
		}
	}, [userId]);

	if (loading) return <p>Loading User Todos...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div>
			<h2>Todos for: {user?.name}</h2>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<p>
							<b>Title:</b> {todo.title}
						</p>
						<p>
							<b>Completed:</b> {todo.completed ? "Yes" : "No"}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default UserTodos;
