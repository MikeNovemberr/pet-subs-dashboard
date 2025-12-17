export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {/* Create 50 boxes to force scrolling */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="rounded border bg-white p-4">
          Item {i + 1}
        </div>
      ))}
    </div>
  );
}
