import { formatCurrency } from "@/app/lib/utils";
import { sql } from "@/app/lib/data";
import { LatestInvoiceRaw } from "@/app/lib/definitions";

export async function fetchLatestInvoices() {
  try {
    console.log("Fetching latest invoices...");
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const data = await sql<LatestInvoiceRaw[]>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));

    console.log("Data fetch completed after 3 seconds.");
    console.log(data);

    return latestInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
