import { DatePickerInput, DateValue } from '@mantine/dates';
import { lowerCase, startCase } from 'lodash';
import { AiOutlineClose } from 'react-icons/ai';

type InputDateBasicProps = {
  label?: string;
  name?: string;
  id?: string;
  value?: DateValue;
  onChange?: (value: DateValue) => void;
  placeholder?: string;
  noClear?: boolean;
  disabled?: boolean;
  mandatory?: boolean;
  additionalOnClear?: () => void;
  convertToString?: boolean;
};

const InputDateBasic: React.FC<InputDateBasicProps> = ({
  label,
  name,
  id,
  value,
  onChange,
  placeholder,
  noClear = false,
  disabled = false,
  mandatory = false,
  additionalOnClear = () => {},
}) => {
  return (
    <div>
      <label htmlFor={id || name} className="mb-1 inline-block">
        {label || startCase(name)}
        {mandatory && <span className="text-[#f00]">*</span>}
      </label>

      <div className="relative">
        <DatePickerInput
          value={value}
          onChange={onChange}
          className="disabled:bg-muted [&_.mantine-Popover-dropdown]:bg-background"
          styles={{
            placeholder: {
              fontWeight: 'normal',
              color: 'hsl(var(--muted-foreground)) !important',
            },
          }}
          valueFormat="DD/MM/YYYY"
          placeholder={
            !disabled
              ? placeholder ||
                label ||
                `Enter ${lowerCase(name)}...` ||
                'Type something...'
              : undefined
          }
          disabled={disabled}
        />

        {!noClear && value && !disabled && (
          <button
            type="button"
            className="absolute right-[.6rem] top-[50%] grid h-[20px] w-[20px] translate-y-[-50%] cursor-pointer place-items-center rounded-full bg-slate-400 text-sm transition-all hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-600"
            onClick={() => {
              additionalOnClear();
            }}
          >
            <AiOutlineClose className="h-3 w-3 text-black" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputDateBasic;
