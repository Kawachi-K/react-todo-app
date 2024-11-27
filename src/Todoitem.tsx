import React from "react";
import { Todo } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

type Props = {
  todo: Todo;
  updateIsDone: (id: string, value: boolean) => void;
  remove: (id: string) => void;
};

const TodoItem = (props: Props) => {
  const todo = props.todo;

  // 現在の日付を取得
  const currentDate = new Date();
  const dueDate = todo.deadline ? new Date(todo.deadline) : null;

  // 期日が過ぎているかをチェック
  const isOverdue = dueDate && dueDate < currentDate;

  // 優先度を基に星の数を表示
  const priorityStars = "★".repeat(todo.priority); // 優先度に応じて☆の数を表示（例: 1～3）

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={(e) => props.updateIsDone(todo.id, e.target.checked)}
          className="mr-1.5 cursor-pointer"
        />
        <span
          className={`
            ${todo.isDone ? "line-through text-gray-400" : ""}
            ${isOverdue ? "text-red-500" : ""}
          `}
        >
          {todo.name}
        </span>
        {/* 期日が過ぎている場合は💀マークを表示 */}
        {isOverdue && (
          <span className="text-red-500 ml-2">💀</span>
        )}
      </div>
      <div className="flex items-center">
        {/* 優先度の表示 */}
        <span className="mr-2">{priorityStars}</span>
        <button
          onClick={() => props.remove(todo.id)}
          className="rounded-md bg-slate-200 px-2 py-1 text-sm font-bold text-white hover:bg-red-500"
        >
          削除
        </button>
      </div>

      {/* 期限の表示：期日がある場合は表示し、過ぎていれば赤文字にする */}
      {dueDate && (
        <div className={isOverdue ? "text-red-500" : ""} style={{ fontSize: "0.875rem" }}>
          <span>期限: {dayjs(dueDate).format("YYYY-MM-DD HH:mm")}</span>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
