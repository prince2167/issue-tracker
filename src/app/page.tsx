import { Pagination } from "@/components";

export default function Home() {
  return (
    <main>
      <Pagination itemsCount={100} pageSize={10} currentPage={2} />
    </main>
  );
}
