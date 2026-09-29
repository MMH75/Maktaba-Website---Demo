import { notFound } from "next/navigation";
import ProductView from "@/components/ProductView";
import { getProduct, getProducts } from "@/lib/products";

// Pre-render every product page at build time (fully static on Vercel).
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: String(p.id) }));
}

export const dynamicParams = false;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) notFound();

  const product = await getProduct(numericId);
  if (!product) notFound();

  return <ProductView product={product} />;
}
