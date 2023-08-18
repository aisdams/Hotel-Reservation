import { FileEvent } from '@/types';
import { Center, FileInput, FileInputProps, Group, rem } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';
import { lowerCase, startCase } from 'lodash';

import { cn } from '@/lib/utils';

function Value({ file }: { file: File | null }) {
  if (!file) return null;

  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: `${rem(3)} ${rem(7)}`,
        borderRadius: theme.radius.sm,
      })}
    >
      <IconPhoto size={rem(14)} style={{ marginRight: rem(5) }} />
      <span
        style={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          maxWidth: rem(200),
          display: 'inline-block',
        }}
      >
        {file.name}
      </span>
    </Center>
  );
}

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <Group spacing='sm' py='xs'>
        {value.map((file, index) => (
          <Value file={file} key={index} />
        ))}
      </Group>
    );
  }

  return <Value file={value} />;
};

type InputFileBasicProps = {
  multiple?: boolean;
  onChange?: (e: FileEvent) => void;
  label?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  withLabel?: boolean;
  mandatory?: boolean;
  disabled?: boolean;
  labelCN?: string;
};

export default function InputFileBasic({
  multiple = false,
  onChange,
  withLabel = true,
  label,
  name,
  id,
  placeholder,
  mandatory,
  disabled,
  labelCN,
}: InputFileBasicProps) {
  return (
    <div className=''>
      {withLabel && (
        <label
          htmlFor={id || name}
          className={cn('mb-1 inline-block', labelCN)}
        >
          {label || startCase(name)}
          {mandatory && <span className='text-[#f00]'>*</span>}
        </label>
      )}

      <FileInput
        placeholder={
          !disabled
            ? placeholder ||
              label ||
              `Enter ${lowerCase(name)}...` ||
              'Select file...'
            : undefined
        }
        multiple={multiple}
        valueComponent={ValueComponent}
        onChange={onChange}
        styles={{
          placeholder: {
            fontWeight: 'normal',
            color: 'hsl(var(--muted-foreground)) !important',
          },
        }}
      />
    </div>
  );
}
