import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import type { Task } from '../../types';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import toast from 'react-hot-toast';

interface TaskFormProps {
  projectId?: string | null;
  onSuccess?: () => void;
  onCancel?: () => void;
  defaultStatus?: Task['status'];
}

export default function TaskForm({ 
  projectId = null, 
  onSuccess, 
  onCancel,
  defaultStatus = 'todo'
}: TaskFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as Task['priority'],
    status: defaultStatus,
    dueDate: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.error('Task title is required');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'tasks'), {
        projectId,
        title: formData.title.trim(),
        description: formData.description.trim(),
        status: formData.status,
        priority: formData.priority,
        dueDate: formData.dueDate ? new Date(formData.dueDate) : null,
        dependencies: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      toast.success('Task created!');
      setFormData({
        title: '',
        description: '',
        priority: 'medium',
        status: defaultStatus,
        dueDate: '',
      });
      setIsOpen(false);
      onSuccess?.();
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Failed to create task');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto"
        size="sm"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Task
      </Button>
    );
  }

  return (
    <div className="border border-slate-200 rounded-lg p-4 bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">New Task</h3>
          {onCancel && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen(false);
                onCancel();
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <Input
          label="Task Title"
          placeholder="Enter task title..."
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          autoFocus
        />

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Description
          </label>
          <textarea
            className="flex min-h-[80px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Add description (optional)..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Priority
            </label>
            <select
              className="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value as Task['priority'] })}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Due Date
            </label>
            <Input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button type="submit" disabled={loading} className="flex-1">
            {loading ? 'Creating...' : 'Create Task'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setIsOpen(false);
              onCancel?.();
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

