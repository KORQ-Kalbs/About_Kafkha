"use client";

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
      className={`inline-flex w-fit items-center justify-center rounded-full border border-cream-border bg-cream-surface p-1 ${className}`}
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
            className={`min-w-[7.5rem] rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
              isActive
                ? "bg-cream text-charcoal"
                : "text-charcoal-muted hover:text-charcoal"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
