import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "../../../prisma/client";
import IssueStatusBadgae from "@/components/IssueStatusBadgae";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>

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
            <Table.Row key={issue.id}>
              <Table.ColumnHeaderCell>
                {issue.title}
                <div className="block sm:hidden">
                  <IssueStatusBadgae status={issue.status} />
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden sm:table-cell">
                <IssueStatusBadgae status={issue.status} />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden sm:table-cell">
                {issue.createdAt.toDateString()}
              </Table.ColumnHeaderCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
