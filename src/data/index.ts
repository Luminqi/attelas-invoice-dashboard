import invoices from './invoices-attelas.json'
import clients from './clients-attelas.json'

interface LineItem {
  description: string
  quantity: number
  price: number
}

interface Invoice {
  invoiceNumber: string
  clientId: string
  dueDate: string
  status: 'Paid' | 'Pending' | 'Overdue'
  lineItems: LineItem[]
}

interface Client {
  clientId: string
  name: string
  email: string
  address: string
}

export type InvoiceDetail = Invoice & Client & {
  totalAmountDue: number
}

type Maybe<T> = T | null | undefined

export const getInvoices = (): InvoiceDetail[] => {
  return (invoices as Invoice[]).map(({ clientId, ...rest }) => {
    const client = (clients as Client[]).find(client => client.clientId === clientId)

    if (!client) {
      throw new Error('[getInvoices] Client not found')
    }

    const totalAmountDue = rest.lineItems.reduce((acc, item) => acc + item.quantity * item.price, 0)

    return { ...rest, ...client, totalAmountDue }
  })
}

export const getInvoiceDetail = (invoiceNumber: string): Maybe<InvoiceDetail> => {
  return getInvoices().find((invoice) => invoice.invoiceNumber === invoiceNumber)
}