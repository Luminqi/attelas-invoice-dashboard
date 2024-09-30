import { FileMinusIcon } from '@radix-ui/react-icons'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/breadcrumb'
import { Button } from '@/components/button'
import { getInvoiceDetail } from '@/data'
import { ChaseButton } from '@/modules/chase-button'
import { ClientCard } from '@/modules/client-card'
import { InvoiceCard } from '@/modules/invoice-card'
import { LineItemCard } from '@/modules/line-item-card'
import { formatAmount } from '@/common/format-amount'

export function Detail() {
  const { invoiceId } = useParams<{ invoiceId: string }>()
  const navigate = useNavigate()

  const invoice = invoiceId ? getInvoiceDetail(invoiceId) : null

  const onClick = () => {
    navigate('/dashboard')
  }

  if (!invoice) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <FileMinusIcon className="mx-auto h-24 w-24 text-gray-400" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Invoice not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn't find the invoice you're looking for.
          </p>
          <div className="mt-10">
            <Button onClick={onClick}>Back to dashboard</Button>
          </div>
        </div>
      </div>
    )
  }

  const amount = formatAmount(invoice.totalAmountDue)

  const isChaseVisible = invoice.status === 'Overdue'

  return (
    <div className="p-2 text-center w-full max-w-screen-2xl sm:p-4 sm:text-left">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild={true} className="text-lg sm:text-base">
              <Link to="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-lg sm:text-base">
              {invoice.invoiceNumber}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-between mt-2">
        <h1 className="text-lg font-bold leading-tight tracking-tighter sm:text-3xl lg:leading-[1.1] md:block">
          Invoice {invoice.invoiceNumber}
        </h1>
        {isChaseVisible && <ChaseButton invoice={invoice} />}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <InvoiceCard invoice={invoice} />
        <ClientCard invoice={invoice} />
      </div>
      <LineItemCard invoice={invoice} />
      <div className="mt-6 text-right">
        <p className="text-xl font-bold sm:text-2xl">
          Total Amount Due: {amount}
        </p>
      </div>
    </div>
  )
}
