/* eslint-disable jsx-a11y/control-has-associated-label */
import { flexRender, Table } from '@tanstack/react-table';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Loader from '../Loader';
import ButtonNavigation from './ButtonNavigation';

type ReactTableProps = {
  tableInstance: Table<any>;
  isLoading: boolean;
  containerCN?: string;
};

const ReactTable: React.FC<ReactTableProps> = ({
  tableInstance,
  isLoading,
  containerCN,
}) => {
  const table = tableInstance;

  return (
    <div className={cn(containerCN)}>
      <div className='react-table-wrapper mb-2 overflow-x-auto rounded-md border'>
        <table className='w-full'>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className='text-muted-foreground transition-colors hover:bg-muted/50'
              >
                <th className='w-[1px] border-b p-2' />
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className='border-b p-2 text-start text-sm font-medium tracking-wide'
                  >
                    <div className=''>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='relative font-normal'>
            {table.getRowModel().rows.map((row, idx) => {
              const rowNumber =
                table.getState().pagination.pageIndex === 0
                  ? table.getState().pagination.pageIndex
                  : table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize; // 0

              return (
                <tr
                  key={row.id}
                  className={cn(
                    'transition-colors hover:bg-muted/50 [&:last-child>td]:!border-b-0'
                  )}
                >
                  <td className='border-b p-2 text-center font-semibold'>
                    {rowNumber + idx + 1}
                  </td>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className='border-b p-2'>
                      <div className=''>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              );
            })}

            {/* No data info */}
            {table.getRowModel().rows.length < 1 && (
              <tr className=''>
                <td
                  colSpan={table.getAllColumns().length + 1}
                  className='p-2 text-center'
                >
                  No data found.
                </td>
              </tr>
            )}

            {/* Table Loading Overlay */}
            {isLoading && (
              <tr
                className={cn(
                  'absolute inset-0 z-[2] place-items-center bg-black/30',
                  isLoading ? 'grid' : 'hidden'
                )}
              >
                <td className='bg-transparent'>
                  <Loader className='' />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex flex-wrap items-center justify-between gap-2'>
        {/* Page Count & Show */}
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <span className='flex items-center gap-1'>
            Page&nbsp;
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </span>
          {/* <span className='flex items-center gap-1'>
            | Go to page:
            <input
              type='number'
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className='h-[34px] w-16 rounded border p-1 outline-none focus:border-purple-600 dark:border-slate-800 dark:bg-transparent'
            />
          </span> */}
          <Select
            defaultValue='10'
            onValueChange={(newValue) => {
              table.setPageSize(Number(newValue));
            }}
          >
            <SelectTrigger className='w-max font-sans'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem
                    key={pageSize}
                    value={String(pageSize)}
                    className='font-normal'
                  >
                    Show {pageSize}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Next & Prev Buttons */}
        <div className='flex flex-wrap items-center gap-2'>
          <ButtonNavigation
            icon={ChevronsLeft}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          />
          <ButtonNavigation
            icon={ChevronLeft}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          <ButtonNavigation
            icon={ChevronRight}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
          <ButtonNavigation
            icon={ChevronsRight}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          />
        </div>
      </div>
    </div>
  );
};

export default ReactTable;
