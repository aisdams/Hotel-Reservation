import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';
import { id as indonesia } from 'date-fns/locale';
import { lowerCase, startCase } from 'lodash';
import { AiOutlineClose } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import { useController, useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';

type InputDateProps = {
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  // onChange,
  mandatory?: boolean;
  noClear?: boolean;
  dateFormat?: string | string[] | undefined;
  minDate?: Date;
  showTimeInput?: boolean;
};

const InputDate: React.FC<InputDateProps> = ({
  label,
  name,
  id,
  placeholder,
  disabled,
  // onChange,
  mandatory,
  noClear,
  dateFormat = 'dd/MM/yyyy',
  minDate = null,
  showTimeInput = true,
}) => {
  const { setValue } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  const onChange = (newDate: Date | null) => {
    if (newDate) return field.onChange(newDate);

    return field.onChange(null);
  };

  return (
    <div className="relative">
      <label htmlFor={id || name} className="mb-1 inline-block">
        {label || startCase(name)}
        {mandatory && <span className="text-[#f00]">*</span>}
      </label>

      <div
        className={cn(
          'relative flex items-center overflow-hidden rounded-md border focus-within:border-transparent focus-within:ring-2 focus-within:ring-primary [&>.react-datepicker-wrapper]:w-full'
        )}
      >
        <DatePicker
          // {...register(name)}
          name={field.name}
          onChange={onChange}
          onBlur={field.onBlur}
          ref={(elem: any) => elem && field.ref(elem.input)}
          selected={field.value}
          id={id || name}
          dateFormat={dateFormat}
          className={cn(
            'h-9 w-full bg-transparent px-2 font-normal outline-none placeholder:text-sm placeholder:font-normal placeholder:text-muted-foreground disabled:bg-slate-200 dark:disabled:bg-slate-800'
          )}
          placeholderText={
            !disabled
              ? placeholder ||
                label ||
                `Enter ${lowerCase(name)}...` ||
                'Type something...'
              : undefined
          }
          disabled={disabled}
          portalId="root-portal"
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          showTimeInput={showTimeInput}
          minDate={minDate}
          timeCaption="Time"
          locale={indonesia}
          // timeFormat={indonesia}
          dropdownMode="select"
          autoComplete="off"
        />
        {!noClear && field.value && !disabled && (
          <button
            type="button"
            className="absolute right-[.6rem] top-[50%] z-[2] grid h-[20px] w-[20px] translate-y-[-50%] cursor-pointer place-items-center rounded-full bg-slate-400 text-sm transition-all hover:bg-slate-500"
            onClick={() => {
              setValue(name, null, { shouldValidate: true });
            }}
          >
            <AiOutlineClose className="h-3 w-3" />
          </button>
        )}
      </div>
      {error?.message && (
        <p className="text-xs tracking-wide text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default InputDate;
