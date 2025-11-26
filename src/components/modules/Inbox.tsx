import { Inbox as InboxIcon } from 'lucide-react';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useCollection } from '../../hooks/useCollection';
import type { Task } from '../../types';
import { orderBy } from 'firebase/firestore';

export default function Inbox() {
  
  const { data: allTasks, loading } = useCollection<Task>(
    'tasks',
    [orderBy('createdAt', 'desc')]
  );
  
  const tasks = allTasks.filter(t => t.projectId === null);


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <InboxIcon className="h-8 w-8" />
            Inbox
          </h1>
          <p className="text-slate-600 mt-1">Quick capture for tasks not yet assigned to a project</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Capture</CardTitle>
        </CardHeader>
        <CardContent>
          <TaskForm 
            projectId={null} 
            defaultStatus="todo"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inbox Tasks ({tasks.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-slate-500">Loading tasks...</div>
          ) : (
            <TaskList 
              tasks={tasks} 
              emptyMessage="Your inbox is empty. Add a task above to get started!"
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

