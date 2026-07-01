function CourseLayout({ sidebar, children }) {
  return (
    <div className="flex">
      <aside className="w-80 border-r border-[var(--border-color)] bg-[var(--sidebar-bg)] min-h-screen shrink-0">
        {sidebar}
      </aside>
      <main className="flex-1 p-4 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default CourseLayout;
