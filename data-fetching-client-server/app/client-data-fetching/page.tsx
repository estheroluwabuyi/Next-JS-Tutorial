"use client";

import { useEffect, useState } from "react";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function ClientTodoComponent() {
  const [todos, setTodos] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1",
        );
        const data = await response.json();
        setTodos(data);
      } catch {
        setError("Failed to fetch todos");
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {todos && (
        <div>
          <h1 className="text-xl font-bold mb-4">Todo Details</h1>
          <p className="mb-2 font-semibold">
            User ID: {todos.userId}
            
          </p>
          <h2 className="font-semibold">Title: {todos.title}</h2>
          <p className="mt-2 font-semibold">Completed: {todos.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
