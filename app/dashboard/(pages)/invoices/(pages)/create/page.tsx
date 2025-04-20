import Form from "@/app/dashboard/(pages)/invoices/ui/forms/create-form";
import Breadcrumbs from "@/app/dashboard/(pages)/invoices/ui/breadcrumbs";
import { fetchCustomers } from "@/app/dashboard/(pages)/customers/api/fetch-customers";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
