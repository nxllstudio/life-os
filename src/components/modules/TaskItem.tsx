import { Check, Circle, Clock, Trash2 } from 'lucide-react';
import type { Task } from '../../types';
import { format } from 'date-fns';
import { deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import toast from 'react-hot-toast';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

interface TaskItemProps {
  task: Task;
  onUpdate?: () => void;
}

export default function TaskItem({ task, onUpdate }: TaskItemProps) {
  const priorityColors = {
    high: 'border-red-500 bg-red-50',
    medium: 'border-yellow-500 bg-yellow-50',
    low: 'border-slate-300 bg-slate-50',
  };

  const statusIcons = {
    todo: Circle,
    'in-progress': Clock,
    done: Check,
  };

  const handleStatusChange = async (newStatus: Task['status']) => {
    try {
      await updateDoc(doc(db, 'tasks', task.id), {
        status: newStatus,
        updatedAt: serverTimestamp(),
      });
      toast.success('Task updated');
      onUpdate?.();
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error('Failed to update task');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      await deleteDoc(doc(db, 'tasks', task.id));
      toast.success('Task deleted');
      onUpdate?.();
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
    }
  };

  const StatusIcon = statusIcons[task.status];

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-lg border transition-colors',
        task.status === 'done' ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200',
        'hover:border-slate-300'
      )}
    >
      <button
        onClick={() => {
          const nextStatus: Task['status'] = 
            task.status === 'todo' ? 'in-progress' :
            task.status === 'in-progress' ? 'done' : 'todo';
          handleStatusChange(nextStatus);
        }}
        className={cn(
          'mt-0.5 flex-shrink-0 transition-colors',
          task.status === 'done' ? 'text-finance-600' : 'text-slate-400 hover:text-slate-600'
        )}
      >
        <StatusIcon className="h-5 w-5" />
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h4
              className={cn(
                'font-medium text-slate-900',
                task.status === 'done' && 'line-through text-slate-500'
              )}
            >
              {task.title}
            </h4>
            {task.description && (
              <p className="text-sm text-slate-600 mt-1">{task.description}</p>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span
              className={cn(
                'px-2 py-1 text-xs font-medium rounded border',
                priorityColors[task.priority]
              )}
            >
              {task.priority}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {task.dueDate && (
          <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
            <Clock className="h-3 w-3" />
            <span>
              Due {format(
                task.dueDate instanceof Date 
                  ? task.dueDate 
                  : new Date((task.dueDate as any)?.seconds * 1000 || task.dueDate),
                'MMM d, yyyy'
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

