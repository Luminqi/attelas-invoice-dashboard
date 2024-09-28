import { cx } from "@/common/cx";
import { Badge } from "@/components/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import type { InvoiceDetail } from '@/data'

interface Props {
  invoice: InvoiceDetail
}

function getStatusColor(status: InvoiceDetail['status']) {
  switch (status) {
    case 'Paid':
      return 'bg-green-500';
    case 'Pending':
      return 'bg-gray-500';
    case 'Overdue':
      return 'bg-red-500';
  }
}

export function InvoiceCard({ invoice }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Invoice</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Invoice Number</dt>
            <dd>{invoice.invoiceNumber}</dd>
          </div>
          <div>
            <dt className="font-semibold">Due Date</dt>
            <dd>{invoice.dueDate}</dd>
          </div>
          <div>
            <dt className="font-semibold">Status</dt>
            <dd>
              <Badge className={cx(getStatusColor(invoice.status), "pointer-events-none")}>{invoice.status}</Badge>
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}