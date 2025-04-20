import Form from "@/app/(pages)/dashboard/(pages)/invoices/ui/forms/edit-form";
import Breadcrumbs from "@/app/(pages)/dashboard/(pages)/invoices/ui/breadcrumbs";
import { fetchCustomers } from "@/app/(pages)/dashboard/(pages)/customers/api/fetch-customers";
import { fetchInvoiceById } from "@/app/(pages)/dashboard/(pages)/invoices/api/fetch-invoice";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) notFound();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
