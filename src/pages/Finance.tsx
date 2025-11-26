import Card, { CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export default function Finance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Finance</h1>
        <p className="text-slate-600 mt-1">Manage your finances and track spending</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Net Worth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-500">Chart coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}

