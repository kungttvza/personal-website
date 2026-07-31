import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4">
        {/* Logo */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-primary/30 text-white font-bold tracking-wider">
          FS
        </div>
        
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Full Stack AI Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
