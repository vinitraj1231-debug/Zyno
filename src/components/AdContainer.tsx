import React from 'react';

interface AdContainerProps {
  slotId?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

export function AdContainer({ slotId = '0000000000', format = 'auto', className = '' }: AdContainerProps) {
  return (
    <div className={`my-8 p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl text-center relative overflow-hidden group ${className}`}>
      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">
        Advertisement
      </div>

      {/* Google AdSense slot container */}
      <div className="min-h-[100px] flex items-center justify-center bg-slate-950/60 rounded-lg border border-dashed border-slate-800/60 p-4">
        <div className="space-y-1">
          <p className="text-xs text-slate-400 font-mono">Ad Unit #{slotId}</p>
          <p className="text-[11px] text-slate-500">Google AdSense Auto / Display Container</p>
        </div>
      </div>
    </div>
  );
}
