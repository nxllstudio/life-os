import { format } from 'date-fns';
import Card, { CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import TaskForm from '../components/modules/TaskForm';
import { useCollection } from '../hooks/useCollection';
import type { Task } from '../types';
import { orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const currentTime = format(new Date(), 'EEEE, MMMM d, yyyy');
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good Morning' : currentHour < 18 ? 'Good Afternoon' : 'Good Evening';

  const { data: allTasks, loading: tasksLoading } = useCollection<Task>(
    'tasks',
    [orderBy('createdAt', 'desc')]
  );
  
  const upcomingTasks = allTasks.filter(t => t.status !== 'done').slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{greeting}</h1>
        <p className="text-slate-600 mt-1">{currentTime}</p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Financial Snapshot */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-finance-700">Financial Snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-600">Net Worth</p>
                <p className="text-3xl font-bold text-slate-900">$0.00</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">This Month's Spend</p>
                <p className="text-2xl font-semibold text-slate-900">$0.00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Up Next Tasks */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-projects-700">Up Next</CardTitle>
              <Link 
                to="/projects" 
                className="text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1"
              >
                View all
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {tasksLoading ? (
              <div className="text-sm text-slate-500">Loading...</div>
            ) : upcomingTasks.length > 0 ? (
              <div className="space-y-2">
                {upcomingTasks.slice(0, 3).map((task) => (
                  <div key={task.id} className="text-sm">
                    <p className="font-medium text-slate-900">{task.title}</p>
                    <p className="text-xs text-slate-500 capitalize">{task.status}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-slate-500">No tasks yet</p>
                <TaskForm />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Workout Streak */}
        <Card>
          <CardHeader>
            <CardTitle className="text-fitness-700">Workout Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">0</p>
              <p className="text-sm text-slate-600">days</p>
            </div>
          </CardContent>
        </Card>

        {/* Current Book */}
        <Card>
          <CardHeader>
            <CardTitle className="text-library-700">Current Book</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">No book in progress</p>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div>
                <p className="text-sm text-slate-600">Active Projects</p>
                <p className="text-2xl font-bold text-slate-900">0</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Books Read</p>
                <p className="text-2xl font-bold text-slate-900">0</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Workouts</p>
                <p className="text-2xl font-bold text-slate-900">0</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Recipes</p>
                <p className="text-2xl font-bold text-slate-900">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

