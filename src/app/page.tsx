import prisma from "@/lib/db/prisma";
import Image from "next/image";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
