import { useRef } from 'react';
import { TimeInput } from '@mantine/dates';
import { startCase } from 'lodash';
import {AiOutlineClockCircle, AiOutlineClose} from 'react-icons/ai'
import { useController, useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type InputTimeProps = {
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  mandatory?: boolean;
  withLabel?: boolean;
  additionalOnClear?: () => void;
  labelCN?: string;
};

const InputTime: React.FC<InputTimeProps> = ({
  label,
  name,
  id,
  // placeholder,
  disabled,
  withLabel = true,
  mandatory,
  additionalOnClear = () => {},
  labelCN,
}) => {
  const inputRef = useRef<HTMLInputElement | null>();

  const { register, setValue } = useFormContext();
  // const {} = register(name)
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <div className="">
      {withLabel && (
        <label
          htmlFor={id || name}
          className={cn('mb-1 inline-block', labelCN)}
        >
          {label || startCase(name)}
          {mandatory && <span className="text-[#f00]">*</span>}
        </label>
      )}

      <div className="relative">
        <TimeInput
          {...register(name)}
          ref={(e) => {
            field.ref(e);
            inputRef.current = e;
          }}
          value={field.value}
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
          onBlur={field.onBlur}
          rightSection={
            <Button
              type="button"
              variant="ghost"
              onClick={() => inputRef.current?.showPicker()}
              className="h-auto p-2"
            >
              <AiOutlineClockCircle size={16} />
            </Button>
          }
        />

        {field.value && !disabled && (
          <button
            type="button"
            className="absolute right-[2.5rem] top-[50%] grid h-[20px] w-[20px] translate-y-[-50%] cursor-pointer place-items-center rounded-full bg-slate-400 text-sm transition-all hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-600"
            onClick={() => {
              setValue(name, '', {
                shouldValidate: true,
              });
              additionalOnClear();
            }}
          >
            <AiOutlineClose className="h-3 w-3 text-black" />
          </button>
        )}
      </div>

      {error?.message && (
        <p className="text-xs tracking-wide text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default InputTime;
