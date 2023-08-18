import { IS_DEV } from '@/constants';
import { SearchQuery } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrMessage(err: any) {
  const errMsg =
    err?.response?.data?.message || err?.message || 'Something went wrong!';

  if (IS_DEV) {
    console.log('err =>', errMsg);
  }

  return errMsg;
}

export const stringDateToDate = (stringDate: string | Date | null) =>
  stringDate ? new Date(stringDate) : null;

export const dateFormat = (date: Date | string | null) =>
  !date ? '-' : format(new Date(date), 'dd MMMM yyyy', { locale: id });

export const dateHourFormat = (date: Date | string) =>
  format(new Date(date), 'dd MMMM yyyy HH:mm', { locale: id });

export const generateSearchQuery = ({
  searchQueries,
}: {
  searchQueries?: SearchQuery[] | SearchQuery;
}) => {
  let strings = '';

  if (!searchQueries) return { strings };

  if (
    !Array.isArray(searchQueries) &&
    !!searchQueries.by &&
    !!searchQueries.key
  ) {
    strings = `&${searchQueries.by}=${searchQueries.key}`;
    return { strings };
  }

  if (Array.isArray(searchQueries)) {
    searchQueries.forEach((q: any, idx: number) => {
      if (!q?.by || !q?.key) return;

      //! generate the query params
      strings += `&${q.by}=${q.key}${
        idx + 1 < searchQueries.length ? '&' : ''
      }`;
    });
  }

  return { strings };
};

export const handleResetFieldAfterChange = ({
  resetFieldAfterChange = [],
  setValue,
}: {
  resetFieldAfterChange?: string | string[];
  setValue: (
    name: string,
    value: any,
    options?: Partial<{
      shouldValidate: boolean;
      shouldDirty: boolean;
      shouldTouch: boolean;
    }>
  ) => void;
}) => {
  if (typeof resetFieldAfterChange === 'string') {
    setValue(resetFieldAfterChange, '');
  }

  if (Array.isArray(resetFieldAfterChange)) {
    resetFieldAfterChange.map((field) => setValue(field, ''));
  }
};

export const percentage = (value: number, total: number) => {
  const result = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format((value / total) * 100);

  // eslint-disable-next-line no-restricted-globals
  return isNaN(Number(result)) ? 0 : Number(result);
};

export const isOdd = (number: number) => {
  return number % 2 === 1;
};
export const isEven = (number: number) => {
  return number % 2 === 0;
};

export const coalesce = (variable?: string | number | null) => {
  return variable || variable === '' || variable === 0;
};
