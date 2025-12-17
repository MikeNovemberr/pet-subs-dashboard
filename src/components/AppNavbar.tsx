'use client';

import Link from 'next/link';
import { Bolt, CreditCard, LogOut, Moon, ShieldPlus, Sun, User, Languages } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useI18n } from '@/i18n/i18n';

const AppNavbar = () => {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useI18n();
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Left Side */}
      <SidebarTrigger />
      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        {/* Theme menu*/}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Language menu (right next to theme) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Change language">
              <Languages className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Language</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => setLocale('en_US')}>
              English {locale === 'en_US' ? '✓' : ''}
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setLocale('sr_RS')}>
              Serbian {locale === 'sr_RS' ? '✓' : ''}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={16}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-[1.2rem] w-[1.2rem]" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-[1.2rem] w-[1.2rem]" />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShieldPlus className="mr-2 h-[1.2rem] w-[1.2rem]" />
              Subscription
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bolt className="mr-2 h-[1.2rem] w-[1.2rem]" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-[1.2rem] w-[1.2rem]" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default AppNavbar;
