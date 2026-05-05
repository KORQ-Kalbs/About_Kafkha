"use client";

import { motion } from "framer-motion";

export type TabOption<TTabId extends string = string> = {
  id: TTabId;
  label: string;
};

type TabToggleProps<TTabId extends string> = {
  tabs: TabOption<TTabId>[];
  activeTab: TTabId;
  onTabChange: (tabId: TTabId) => void;
  className?: string;
};

export default function TabToggle<TTabId extends string>({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}: TabToggleProps<TTabId>) {
  return (
    <div
      className={`inline-flex w-fit items-center justify-center rounded-full border-2 border-white bg-black p-1 ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={`relative min-w-[7.5rem] rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] transition-colors sm:text-sm ${
              isActive ? "text-black" : "text-white/55 hover:text-white"
            }`}
          >
            {isActive ? (
              <motion.div
                layoutId="tab-toggle-indicator"
                className="absolute inset-0 rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.85)]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className="relative z-10 block text-center">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
