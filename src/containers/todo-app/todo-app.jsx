import { useState } from "react";
import { nanoid } from "nanoid";
import TaskForm from "../../components/task-form/task-form";
import TaskList from "../../components/task-list/task-list";

const TodoApp = () => {
	const [tasks, setTasks] = useState([]);

	const handleAddTask = (task) => {
		const newTask = {
			id: nanoid(),
			...task,
			isFinish: false,
		};

		setTasks((t) => [...t, newTask]);
	};

	const handleDeleteTask = (id) => {
		setTasks((t) => t.filter((task) => task.id !== id));
	};
	const handleFinishTask = (id) => {
		setTasks((t) =>
			t.map((task) =>
				task.id !== id ? task : { ...task, isFinish: true },
			),
		);
	};
	return (
		<div>
			<h1>TodoApp</h1>
			<TaskForm onValided={handleAddTask} />
			<TaskList
				task={tasks}
				onTaskFinish={handleFinishTask}
				onTaskDelete={handleDeleteTask}
			/>
		</div>
	);
};

export default TodoApp;
