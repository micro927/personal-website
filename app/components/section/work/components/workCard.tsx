'use client';

import { useState } from 'react';
import { cx } from '@emotion/css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { WorkItem } from '@/app/core/types/data';
import { VariantEnum } from '@/app/core/types/app';
import Button from '@/app/components/button';
import Card from '@/app/components/card';
import WorkTimeBadges from './workTimeBadges';
import { AnimatePresence, motion } from 'framer-motion';

function WorkCard({ work }: { work: WorkItem }) {
  const {
    jobTitle,
    dateStart,
    dateEnd,
    organization,
    jobField,
    tagList,
    descriptionList,
  } = work;
  const isDeveloperJob = jobField === 'developer';
  const [isShowDescription, setIsShowDescription] = useState(dateEnd === '');

  const variants = {
    open: { opacity: 1, x: 0, height: 'fit-content' },
    closed: { opacity: 0, x: 0, height: 0 },
  };

  return (
    <Card className={cx(isDeveloperJob && 'cursor-pointer')}>
      <div
        onClick={() => setIsShowDescription((prev) => !prev)}
        className="group relative overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <div>
            <h5
              className={cx(
                isDeveloperJob ? 'text-2xl' : 'text-lg text-gray-500',
                'font-medium',
              )}
            >
              {jobTitle}
            </h5>
            <p
              className={cx(
                isDeveloperJob ? 'text-primary-500' : 'text-sm text-gray-500',
                'font-medium',
              )}
            >
              {organization}
            </p>
          </div>
          <div
            className={cx(
              'flex items-center gap-3 transition delay-75 duration-300',
              isDeveloperJob && 'group-hover:translate-x-0',
              isDeveloperJob && isShowDescription
                ? 'translate-x-0'
                : 'translate-x-10',
            )}
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col items-end justify-center gap-1">
                <WorkTimeBadges
                  dateStart={dateStart}
                  dateEnd={dateEnd}
                  isDeveloper={isDeveloperJob}
                />
              </div>
            </div>
            <Button
              variant={VariantEnum.ACCENT}
              className={cx(
                'relative h-8 w-8 overflow-hidden !rounded-full !py-4 text-sm ',
                !isDeveloperJob && 'cursor-auto bg-gray-500 hover:bg-gray-500',
              )}
              disabled={!isDeveloperJob}
            >
              <AnimatePresence>
                {isShowDescription && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <FaXmark />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {!isShowDescription && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <FaAngleDoubleDown />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        <motion.ol
          animate={isShowDescription ? 'open' : 'closed'}
          variants={variants}
          className="my-3 list-disc text-sm"
        >
          {descriptionList.map((description, key) => (
            <li key={key} className="pb-2 pl-5 font-thin">
              - {description}
            </li>
          ))}
        </motion.ol>
        {isDeveloperJob && (
          <div className="text-right text-xs text-gray-500">
            {tagList.join(' · ')}
          </div>
        )}
      </div>
    </Card>
  );
}

export default WorkCard;
