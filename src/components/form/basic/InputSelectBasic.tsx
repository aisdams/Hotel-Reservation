import { useRef } from 'react';
import { useIsDark, useMounted } from '@/hooks';
import { debounce, lowerCase, startCase } from 'lodash';
import { AiOutlineClose } from 'react-icons/ai';
import Select, { InputActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

type InputSelectBasicProps = {
  options?: any[];
  defaultValue?: string;
  value: string;
  setValue: (value: string) => void;
  setSearchText: (value: string) => void;
  optionLabel?: string;
  optionValue?: string;
  isLoading?: boolean;
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  mandatory?: boolean;
  noClear?: boolean;
  disabled?: boolean;
  menuZIndex?: number;
  menuIsOpen?: boolean | undefined;
  containerCN?: string;
  noPortal?: boolean;
  noLabel?: boolean;
  additionalOnClear?: () => void;
};

const InputSelectBasic: React.FC<InputSelectBasicProps> = ({
  options = [],
  defaultValue,
  value,
  setValue,
  setSearchText,
  optionLabel = 'label',
  optionValue = 'value',
  isLoading,
  name,
  id,
  label,
  placeholder,
  mandatory,
  noClear,
  disabled,
  menuZIndex = 10,
  containerCN,
  menuIsOpen = undefined,
  noPortal = false,
  noLabel,
  // additionalOnChange = () => {},
  additionalOnClear = () => {},
}) => {
  const { isDark } = useIsDark();
  const mounted = useMounted();

  const handleSearchDebounced = useRef(
    debounce((searchText) => setSearchText(searchText), 300)
  ).current;

  const handleInputChange = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== 'input-blur' && meta.action !== 'menu-close') {
      handleSearchDebounced(inputText);
    }
  };

  const selectedValue = options?.find(
    (option) => String(option[optionValue]) === String(value)
  );

  return (
    <div className={containerCN}>
      <div className="">
        {!noLabel && (
          <label htmlFor={id || name} className="mb-1 inline-block">
            {label || startCase(name)}
            {mandatory && <span className="text-red-600">*</span>}
          </label>
        )}

        <div className="relative">
          {mounted && (
            <Select
              options={options || []}
              defaultValue={defaultValue}
              value={value ? selectedValue : null}
              getOptionLabel={(option: any) => option[optionLabel]}
              getOptionValue={(option: any) => option[optionValue]}
              onChange={(option: any) => setValue(option[optionValue])}
              onInputChange={handleInputChange}
              onBlur={() => {
                //! reset search input 'onBlur'
                setSearchText('');
              }}
              isLoading={isLoading}
              isDisabled={disabled}
              name={name}
              id={id || name}
              instanceId={id || name}
              placeholder={
                !disabled
                  ? placeholder ||
                    label ||
                    `Enter ${lowerCase(name)}...` ||
                    'Type something...'
                  : null
              }
              components={animatedComponents}
              className=""
              classNamePrefix="select"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: '#7c3aed',
                  primary25: '#7c3aed',
                  neutral0: 'transparent',
                  neutral20: '#525255',
                  neutral80: 'white',
                },
              })}
              menuPortalTarget={noPortal ? undefined : document.body}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: menuZIndex || 10 }),
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  height: '36px',
                  minHeight: 'auto',
                  backgroundColor: state.isDisabled
                    ? `${isDark ? 'rgb(30 41 59)' : 'rgb(226 232 240)'}`
                    : 'transparent',
                  border: state.isFocused
                    ? '1.5px solid hsl(var(--primary))'
                    : '1px solid hsl(var(--input))',
                  borderRadius: '0.375rem',
                }),
                menu: (provided) => ({
                  ...provided,
                  overflow: 'hidden',
                  border: isDark
                    ? '1px solid hsl(var(--border))'
                    : '0px solid hsl(var(--border))',
                  borderRadius: '0.375rem',
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                }),
                menuList: (provided) => ({
                  ...provided,
                  backgroundColor: 'hsl(var(--background))',
                  padding: '0.25rem',
                }),
                option: (provided, { isSelected, isFocused }) => ({
                  ...provided,
                  padding: 0,
                  paddingBlock: '0.4rem',
                  paddingInline: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  borderRadius: '0.25rem',
                  color:
                    isSelected || isFocused
                      ? 'white'
                      : `${isDark ? '#FAFAFA' : 'black'}`,
                  '&:hover': {
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'white',
                  },
                }),
                placeholder: (provided) => ({
                  ...provided,
                  fontWeight: 400,
                  color: 'hsl(var(--muted-foreground))',
                }),
                input: (provided) => ({
                  ...provided,
                  fontWeight: 400,
                  color: 'hsl(var(--foreground))',
                }),
                singleValue: (provided) => ({
                  ...provided,
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: 'hsl(var(--foreground))',
                }),
                dropdownIndicator: (provided, { selectProps }) => ({
                  ...provided,
                  color: 'hsl(var(--muted-foreground))',
                  '&:hover': {
                    color: 'hsl(var(--muted-foreground))',
                  },
                  transitionProperty: 'transform',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '300ms',
                  transform: selectProps.menuIsOpen
                    ? 'rotate(180deg)'
                    : undefined,
                }),
              }}
              maxMenuHeight={165}
              menuIsOpen={menuIsOpen}
            />
          )}
          {!noClear && value && (
            <button
              type="button"
              className="absolute right-[3rem] top-[50%] z-[2] grid h-[20px] w-[20px] translate-y-[-50%] cursor-pointer place-items-center rounded-full bg-slate-400 text-sm transition-all hover:bg-slate-500"
              onClick={() => {
                setValue('');
                additionalOnClear();
              }}
            >
              <AiOutlineClose className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputSelectBasic;
