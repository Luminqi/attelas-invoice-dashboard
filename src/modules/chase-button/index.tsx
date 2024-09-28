import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'
import { InvoiceDetail } from '@/data'

interface Props {
  invoice: InvoiceDetail
}

export function ChaseButton({ invoice }: Props) {
  const { name, invoiceNumber, totalAmountDue, dueDate} = invoice

  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalAmountDue)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PaperPlaneIcon className="mr-2 h-4 w-4" />
          Chase
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-w-[90%] max-h-[90%] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Email</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-left text-sm">
          <div>
            <div className="text-sm text-gray-500">To: {name}</div>
            <div className="text-sm text-gray-500">Subject: Reminder: Invoice {invoiceNumber} Payment Due</div>
          </div>
          <div className="space-y-4">
            <div>Dear {name},</div>
            <div>
              I hope this email finds you well. I am writing to remind you about the outstanding payment for invoice number {invoice.invoiceNumber}.
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <div className="font-semibold">Invoice Details:</div>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Invoice Number: {invoiceNumber}</li>
                <li>Amount Due: {amount}</li>
                <li>Due Date: {dueDate}</li>
              </ul>
            </div>
            <div>
              We kindly request that you process this payment at your earliest convenience. If you have already made the payment, please disregard this reminder and accept our thanks.
            </div>
            <div>
              If you have any questions or concerns regarding this invoice, please don't hesitate to reach out to us. We're here to help and can discuss any issues you may have.
            </div>
            <div>
              Thank you for your prompt attention to this matter. We value your business and look forward to continuing our professional relationship.
            </div>
            <div>Best regards,</div>
            <div>Attelas</div>
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
