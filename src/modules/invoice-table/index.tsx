import type { Row, VisibilityState } from '@tanstack/react-table'
import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { DataTable, useTable } from '@/components/data-table'
import { getInvoices } from '@/data'
import { columns, type Invoice } from './columns'
import { TableHeader } from './header'

export function InvoiceTable() {
  const data = useMemo(() => getInvoices(), [])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const table = useTable({
    data,
    columns,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnVisibility,
    },
  })

  const navigate = useNavigate()

  const onRowClick = useCallback((row: Row<Invoice>) => {
    navigate(`detail/${row.getValue('invoiceNumber')}`)
  }, [navigate])

  return (
    <div className="w-full">
      <TableHeader table={table} />
      <DataTable table={table} onRowClick={onRowClick} />
    </div>
  )
}