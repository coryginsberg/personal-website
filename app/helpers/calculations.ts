/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import { Temporal } from 'temporal-polyfill';

/** WARNING: THIS IS EXPERIMENTAL CODE!!!
 * This is using a polyfill of the new Temporal Date/Time API for JS.
 * As of this writing, the proposal is in stage 3 and should hit stage 4
 * sometime in the next few months.
 * @see Proposal: https://github.com/tc39/proposal-temporal
 * @see Polyfill: https://www.npmjs.com/package/temporal-polyfill
 * @see Documentation: https://tc39.es/proposal-temporal/docs/index.html
 */
export const calcYearsExperience = (): number => {
  const currentDate = Temporal.Now.plainDateISO();
  const startDate = Temporal.PlainDate.from({
    year: 2018,
    month: 7,
    day: 1,
  });
  return currentDate.since(startDate, { smallestUnit: 'year' }).years;
};
