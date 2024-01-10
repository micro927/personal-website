import { Work } from '@/app/core/types/data';
import WorkCard from './components/workCard';
import SectionBox from '../../sectionBox';

function Work({ works }: { works: Work[] }) {
  return (
    <SectionBox id="work" coloredBackground>
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-3xl font-bold">Work experience</h3>
        </div>
        <hr />
        <div className="flex w-full flex-col gap-2">
          {works.reverse().map((work, key) => (
            <WorkCard key={key} work={work} />
          ))}
        </div>
      </div>
    </SectionBox>
  );
}

export default Work;
