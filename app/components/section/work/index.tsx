import { Work } from '@/app/core/types/data';
import WorkCard from './components/workCard';

function Work({ work }: { work: Work }) {
  return (
    <section>
      <h3 className="text-right text-4xl font-semibold">Work Experience</h3>
      <div className="flex w-full flex-col gap-2 rounded-xl">
        {work.reverse().map((work, key) => (
          <WorkCard key={key} work={work} />
        ))}
      </div>
    </section>
  );
}

export default Work;
