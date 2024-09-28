import { CaretSortIcon } from '@radix-ui/react-icons'
import type { ColumnDef, Column } from '@tanstack/react-table'
import { Button } from '@/components/button'
import type { InvoiceDetail } from '@/data'

export type Invoice = Pick<InvoiceDetail, 'invoiceNumber' | 'name' | 'totalAmountDue' | 'dueDate' | 'status'>

function Sorter({ column, children, className }: { column: Column<Invoice>, children: React.ReactNode, className?: string }) {
  const onClick = () => {
    const currentSort = column.getIsSorted()

    if (!currentSort) {
      column.toggleSorting(false)
    } else if (currentSort === "asc") {
      column.toggleSorting(true)
    } else {
      column.toggleSorting()
    }
  }

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={className}
    >
      {children}
      <CaretSortIcon className="ml-2 h-4 w-4" />
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
      <div className='flex justify-end'>
        <Sorter column={column}>Total Amount Due</Sorter>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmountDue"))

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    }
  },
]

