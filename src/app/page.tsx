import Nav from "@/components/Nav";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import {
  profile,
  skillGroups,
  certifications,
  education,
  experience,
  otherExperience,
} from "@/data/resume";

export default function Home() {
  return (
    <div id="top" className="bg-white dark:bg-black">
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          {profile.title}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {profile.name}
        </h1>
        <p
          id="summary"
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 scroll-mt-24"
        >
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {profile.email}
          </a>
          <span className="flex items-center gap-2">{profile.phone}</span>
          <span className="flex items-center gap-2">{profile.location}</span>
        </div>
      </section>

      {/* Experience */}
      <Section id="experience" eyebrow="Career" title="Work Experience">
        <div>
          {experience.map((entry) => (
            <ExperienceCard key={`${entry.company}-${entry.role}`} entry={entry} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Toolbox" title="Technical Experience">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education & Certifications */}
      <Section id="education" eyebrow="Background" title="Education & Certifications">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Education
            </h3>
            <div className="mt-4 space-y-6">
              {education.map((item) => (
                <div key={item.degree}>
                  <p className="font-medium text-zinc-800 dark:text-zinc-200">
                    {item.degree}
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                    {item.school} · {item.location}
                  </p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Certifications
            </h3>
            <ul className="mt-4 space-y-4">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-medium text-zinc-800 dark:text-zinc-200">
                    {cert.name}
                  </p>
                  {cert.date && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {cert.date}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Other Experience */}
      <Section id="other" eyebrow="More" title="Beyond the Role">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {otherExperience.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
              {item.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        {profile.name} · {profile.location}
      </footer>
    </div>
  );
}
