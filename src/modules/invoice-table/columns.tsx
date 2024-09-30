import { TriangleUpIcon, TriangleDownIcon } from '@radix-ui/react-icons'
import type { ColumnDef, Column } from '@tanstack/react-table'
import { cx } from '@/common/cx'
import { Button } from '@/components/button'
import type { InvoiceDetail } from '@/data'
import { formatAmount } from '@/common/format-amount'

export type Invoice = Pick<
  InvoiceDetail,
  'invoiceNumber' | 'name' | 'totalAmountDue' | 'dueDate' | 'status'
>

function Sorter({
  column,
  children,
  className,
}: {
  column: Column<Invoice>
  children: React.ReactNode
  className?: string
}) {
  const currentSort = column.getIsSorted()

  const onClick = () => {
    if (!currentSort) {
      column.toggleSorting(false)
    } else if (currentSort === 'asc') {
      column.toggleSorting(true)
    } else {
      column.toggleSorting()
    }
  }

  return (
    <Button variant="ghost" onClick={onClick} className={className}>
      {children}
      <div>
        <TriangleUpIcon
          className={cx('h-4 w-4 translate-y-1', {
            'text-black': currentSort === 'asc',
          })}
        />
        <TriangleDownIcon
          className={cx('h-4 w-4 -translate-y-1', {
            'text-black': currentSort === 'desc',
          })}
        />
      </div>
    </Button>
  )
}

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'invoiceNumber',
    header: () => <div className="whitespace-nowrap">Invoice Number</div>,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <Sorter column={column}>Client Name</Sorter>
    },
  },
  {
    accessorKey: 'dueDate',
    header: ({ column }) => {
      return <Sorter column={column}>Due Date</Sorter>
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'totalAmountDue',
    header: ({ column }) => (
      <div className="flex justify-end">
        <Sorter column={column}>Total Amount Due</Sorter>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('totalAmountDue'))

      const formatted = formatAmount(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
