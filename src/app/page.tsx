import { redirect } from 'next/navigation';

export default function RootPage() {
  // Logic:
  // 1. Check if user has a session (we will add this later with Supabase/Auth)
  // const isLoggedIn = false;

  // 2. If NOT logged in -> go to Login
  // if (!isLoggedIn) redirect("/login");

  // 3. If Logged in (or for now, while building) -> go to Dashboard
  redirect('/dashboard');
}
