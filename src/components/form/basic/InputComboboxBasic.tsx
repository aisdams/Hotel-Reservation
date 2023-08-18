import { useMemo, useState } from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type ComboboxProps = {
  options: any[];
  value?: string;
  setValue: (value: string) => void;
  optionValue?: string;
  optionLabel?: string;
  isLoading?: boolean;
};

export default function Combobox({
  options: tempOptions = [],
  value,
  setValue,
  optionValue = 'value',
  optionLabel = 'label',
  isLoading,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // const isServerSearch = !!(inputValue && setInputValue);

  const options: any[] = useMemo(
    () =>
      tempOptions.filter((option) =>
        option[optionLabel]
          .toLowerCase()
          .includes(inputValue?.toLocaleLowerCase() || '')
      ),
    [tempOptions, inputValue]
  );

  const selectedValue = useMemo(() => {
    const foundOption = options?.find((option: any) => {
      return (
        String(option[optionValue]).toLowerCase() ===
        String(value).toLowerCase()
      );
    });

    // if (foundOption && foundOption[optionLabel]) {
    //   return foundOption[optionLabel];
    // }

    return foundOption || undefined;
  }, [tempOptions, value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn(
            'w-[200px] justify-between text-muted-foreground',
            selectedValue && selectedValue[optionLabel] && 'text-foreground'
          )}
        >
          {selectedValue ? selectedValue[optionLabel] : 'Select option...'}
          <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command
          value={optionValue}
          shouldFilter={false}
          // filter={(value, search) => {
          //   console.log('value =>', value);
          //   return 1;
          // }}
        >
          <CommandInput
            value={inputValue}
            onValueChange={setInputValue}
            placeholder='Search option...'
            className='h-9'
          />
          <CommandList>
            {isLoading ? (
              <div
                className='py-6 text-center text-sm'
                cmdk-empty=''
                role='presentation'
              >
                Loading...
              </div>
            ) : options.length < 1 ? (
              <div
                className='py-6 text-center text-sm'
                cmdk-empty=''
                role='presentation'
              >
                No option found.
              </div>
            ) : (
              <CommandGroup>
                {options?.map((option) => (
                  <CommandItem
                    key={option[optionValue]}
                    value={
                      option[optionValue]
                      // isServerSearch
                      //   ? option[optionValue]
                      //   : option[optionLabel]
                    }
                    onSelect={(currentValue: string) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setInputValue('');
                      setOpen(false);
                    }}
                  >
                    {option[optionLabel]}
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4',
                        selectedValue &&
                          selectedValue[optionValue] === option[optionValue]
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
