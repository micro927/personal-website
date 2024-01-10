'use client';

import { Work } from '@/app/core/types/data';
import WorkCard from './components/workCard';
import SectionBox from '../../sectionBox';
import { useEffect, useState } from 'react';

function Work({ works }: { works: Work[] }) {
  const [sortedWork, setSortedWork] = useState<Work[]>([]);

  useEffect(() => {
    setSortedWork(works.sort((a, b) => b.jobNo - a.jobNo));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionBox id="work" coloredBackground>
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-3xl font-bold">Work experience</h3>
        </div>
        <hr />
        <div className="flex w-full flex-col gap-2">
          {sortedWork.map((work, key) => (
            <WorkCard key={key} work={work} />
          ))}
        </div>
      </div>
    </SectionBox>
  );
}

export default Work;
