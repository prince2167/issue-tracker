import { Table } from "@radix-ui/themes";
import { Skeleton } from "@/components";
import IssueAction from "./IssueAction";

const LoadingIssuePage = () => {
  const issues = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <IssueAction />

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue}>
              <Table.ColumnHeaderCell>
                <Skeleton />
                <div className="block sm:hidden">
                  <Skeleton />
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden sm:table-cell">
                <Skeleton />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden sm:table-cell">
                <Skeleton />
              </Table.ColumnHeaderCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default LoadingIssuePage;
