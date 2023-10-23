import { Pagination } from "@/components";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <main>
      <Pagination
        itemsCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page)}
      />
    </main>
  );
}
