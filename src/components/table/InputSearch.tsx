import React from 'react';
import { Option } from '@/types';

import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import InputTextBasic from '../forms/basic/InputTextBasic';

type InputSearchProps = {
  searchBy: string;
  searchKey: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (value: string) => void;
  options: Option[];
  containerCN?: string;
};

const InputSearch: React.FC<InputSearchProps> = ({
  searchBy,
  searchKey,
  onInputChange,
  onSelectChange,
  options,
  containerCN,
}) => {
  return (
    <div className={cn('flex items-center gap-2', containerCN)}>
      <InputTextBasic
        name={searchBy}
        value={searchKey}
        onChange={onInputChange}
        noLabel
        containerCN='order-2 sm:order-[0]'
      />
      <Select value={searchBy} onValueChange={onSelectChange}>
        <SelectTrigger className='min-h-9 h-auto w-max'>
          <SelectValue placeholder='Filter by' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InputSearch;
