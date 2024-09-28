import { InvoiceTable } from '@/modules/invoice-table'

export function Dashboard() {
  return (
    <div className="p-2 text-center sm:p-4 sm:text-left w-full max-w-screen-2xl">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1] md:block">Invoice Dashboard</h1>
      <InvoiceTable />
    </div>
  )
}