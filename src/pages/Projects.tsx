import { useState } from 'react';
import { Inbox, LayoutGrid } from 'lucide-react';
import Card, { CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import TaskForm from '../components/modules/TaskForm';
import TaskList from '../components/modules/TaskList';
import { useCollection } from '../hooks/useCollection';
import type { Task } from '../types';
import { orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function Projects() {
  const [viewMode, setViewMode] = useState<'all' | 'inbox'>('all');

  const { data: allTasks, loading } = useCollection<Task>(
    'tasks',
    [orderBy('createdAt', 'desc')]
  );

  const inboxTasks = allTasks.filter(t => t.projectId === null);


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
          <p className="text-slate-600 mt-1">Manage your projects and tasks</p>
        </div>
        <div className="flex gap-2">
          <Link to="/inbox">
            <Button variant="outline" size="sm">
              <Inbox className="h-4 w-4 mr-2" />
              Inbox
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick Add Task */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Add Task</CardTitle>
        </CardHeader>
        <CardContent>
          <TaskForm />
        </CardContent>
      </Card>

      {/* View Toggle */}
      <div className="flex gap-2 border-b border-slate-200">
        <button
          onClick={() => setViewMode('all')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            viewMode === 'all'
              ? 'border-projects-600 text-projects-700'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <LayoutGrid className="h-4 w-4 inline mr-2" />
          All Tasks ({allTasks.length})
        </button>
        <button
          onClick={() => setViewMode('inbox')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            viewMode === 'inbox'
              ? 'border-projects-600 text-projects-700'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Inbox className="h-4 w-4 inline mr-2" />
          Inbox ({inboxTasks.length})
        </button>
      </div>

      {/* Tasks List */}
      <Card>
        <CardHeader>
          <CardTitle>
            {viewMode === 'all' ? 'All Tasks' : 'Inbox Tasks'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-slate-500">Loading tasks...</div>
          ) : (
            <TaskList
              tasks={viewMode === 'all' ? allTasks : inboxTasks}
              groupBy="status"
              emptyMessage={
                viewMode === 'all'
                  ? 'No tasks yet. Create one above!'
                  : 'No inbox tasks. Add one above!'
              }
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

