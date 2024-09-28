import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import type { InvoiceDetail } from '@/data'

interface Props {
  invoice: InvoiceDetail
}

export function ClientCard({ invoice }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Client</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold">Name</dt>
            <dd>{invoice.name}</dd>
          </div>
          <div>
            <dt className="font-semibold">Email</dt>
            <dd>{invoice.email}</dd>
          </div>
          <div>
            <dt className="font-semibold">Address</dt>
            <dd className="whitespace-pre-line">{invoice.address}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}