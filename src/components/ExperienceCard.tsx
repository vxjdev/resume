import { ExperienceEntry } from "@/data/resume";

export default function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
      <span className="absolute left-0 top-4 h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-zinc-200 last:hidden dark:bg-zinc-800" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {entry.role}
        </h3>
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {entry.period}
        </span>
      </div>
      <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
        {entry.company} · {entry.location}
      </p>

      <div className="mt-4 space-y-4">
        {entry.groups.map((group) => (
          <div key={group.heading}>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              {group.heading}
            </p>
            <ul className="mt-1.5 space-y-1.5">
              {group.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
