import ResponsiveBox from "@/components/core/ResponsiveBox";

export default function EducationSection({ id }: { id: string }) {
  return (
    <ResponsiveBox classNames="py-24 bg-slate-950" id={id}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">Education</h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h3 className="text-xl font-bold text-white">B.Tech in Computer Science</h3>
          <p className="text-indigo-400 font-medium">Abdul Kalam Technical University — 2023</p>
        </div>
      </div>
    </ResponsiveBox>
  );
}
