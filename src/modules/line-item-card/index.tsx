import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Table, TableHeader, TableBody, TableCell, TableHead, TableRow } from "@/components/table";
import type { InvoiceDetail } from '@/data'

interface Props {
  invoice: InvoiceDetail
}

export function LineItemCard({ invoice }: Props) {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-lg">Line Items</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right whitespace-nowrap">Unit Price</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoice.lineItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-left">{item.description}</TableCell>
                <TableCell className="text-right">{item.quantity}</TableCell>
                <TableCell className="text-right">${item.price}</TableCell>
                <TableCell className="text-right">${item.price * item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}