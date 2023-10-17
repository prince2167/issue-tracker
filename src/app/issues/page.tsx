import { Table } from "@radix-ui/themes";
import prisma from "../../../prisma/client";
import IssueStatusBadgae from "@/components/IssueStatusBadgae";
import delay from "delay";
import IssueAction from "./IssueAction";
import Link from "@/components/Link";
const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);
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
            <Table.Row key={issue.id}>
              <Table.ColumnHeaderCell>
                <Link href={`issues/${issue.id}`}>{issue.title}</Link>
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
