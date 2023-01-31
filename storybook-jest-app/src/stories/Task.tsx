import React from "react";
import PropTypes from "prop-types";

export interface TaskProps {
  task: {
    id?: any;
    title?: string | number | readonly string[] | undefined;
    state?: any;
    updatedAt?: any;
  };
  onArchiveTask: any;
  onPinTask: any;
}
export default function Task({ task, onArchiveTask, onPinTask }: TaskProps) {
  return (
    <div className={`list-item ${task.state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={task.state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(task.id)}
          id={`archiveTask-${task.id}`}
          aria-label={`archiveTask-${task.id}`}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {task.state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(task.id)}>
            <span
              className={`icon-star`}
              id={`pinTask-${task.id}`}
              aria-label={`pinTask-${task.id}`}
            />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
};
