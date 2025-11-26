import type { Task } from '../../types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onUpdate?: () => void;
  emptyMessage?: string;
  groupBy?: 'status' | 'priority' | 'none';
}

export default function TaskList({ 
  tasks, 
  onUpdate, 
  emptyMessage = 'No tasks yet',
  groupBy = 'none'
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  if (groupBy === 'status') {
    const grouped = {
      todo: tasks.filter(t => t.status === 'todo'),
      'in-progress': tasks.filter(t => t.status === 'in-progress'),
      done: tasks.filter(t => t.status === 'done'),
    };

    return (
      <div className="space-y-6">
        {Object.entries(grouped).map(([status, statusTasks]) => (
          statusTasks.length > 0 && (
            <div key={status}>
              <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                {status.replace('-', ' ')} ({statusTasks.length})
              </h3>
              <div className="space-y-2">
                {statusTasks.map((task) => (
                  <TaskItem key={task.id} task={task} onUpdate={onUpdate} />
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

