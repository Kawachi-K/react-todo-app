import React from "react";
import { Todo } from "./types";
import TodoItem from "./Todoitem"; // ◀◀ 追加
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faClock,
  faFaceGrinWide,
} from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";

type Props = {
  todos: Todo[];
    updateIsDone: (id: string, value: boolean) => void; // ◀◀ 追加
    remove: (id: string) => void; // ◀◀ 追加
};

const num2star = (n: number): string => "★".repeat(4 - n);

const TodoList = (props: Props) => {
  const todos = props.todos;

  if (todos.length === 0) {
    return (
      <div className="text-red-500">
        現在、登録されているタスクはありません。
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          remove={props.remove}
          updateIsDone={props.updateIsDone}
        />
      ))}
    </div>
  );
};

export default TodoList;