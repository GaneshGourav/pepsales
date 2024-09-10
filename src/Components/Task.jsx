import React from "react";
import { deleteTask } from "../Redux/actions";
import { useDispatch } from "react-redux";
import "../Style/Task.css";

function Task({ task, onEdit }) {
  const dispatch = useDispatch();
  const onDragStart = (e) => {
    e.dataTransfer.setData("id", task.id);
  };

  const handleEditClick = () => {
    onEdit(task);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask(task.id));
  };
  const getTaskStyle = () => {
    switch (task.status) {
      case "pending":
        return { backgroundColor: "#ff8584", color: "black" };
      case "inprogress":
        return { backgroundColor: "#ffefbb", color: "black" };
      case "completed":
        return { backgroundColor: "#96d264", color: "black" };
      default:
        return {};
    }
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={onDragStart}
      style={getTaskStyle()}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p className="creation-time">
        <strong>Created:</strong> {task.createdAt}
      </p>
      {task.updatedAt && (
        <p className="updated-time">
          <strong>Updated:</strong> {task.updatedAt}
        </p>
      )}
      <button onClick={handleEditClick} className="edit-btn">
        Edit
      </button>
      <button onClick={handleDeleteClick} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default Task;
