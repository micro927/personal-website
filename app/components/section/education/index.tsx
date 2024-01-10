import { FaPlus } from 'react-icons/fa';
import SectionBox from '../../sectionBox';
import { Education } from '@/app/core/types/data';

function Education({ educations }: { educations: Education[] }) {
  return (
    <SectionBox id="education">
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-3xl font-bold">Education</h3>
        </div>
        {/* <hr /> */}
        <div className="flex w-full flex-col gap-2 rounded-xl bg-slate-50 px-8">
          {educations.map(({ levelTitle, institute, yearGrad }, key) => {
            return (
              <div
                key={key}
                className="flex items-center gap-5 border-b p-5 last:border-none"
              >
                <div>
                  <FaPlus size={20} />
                </div>
                <div className="gap-2">
                  <h5 className="text-base font-bold md:text-lg">
                    {levelTitle} ({yearGrad})
                  </h5>
                  <p className="text-xs md:text-sm">{institute}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionBox>
  );
}

export default Education;
