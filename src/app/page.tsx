import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Button variant="outline" size="lg" className="rounded-full">
        <Plus />
        Click me
      </Button>
    </main>
  );
}
