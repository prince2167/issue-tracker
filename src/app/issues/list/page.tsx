import { Table } from "@radix-ui/themes";
import prisma from "../../../../prisma/client";
import { IssueStatusBadgae, Link } from "@/components";
import NextLink from "next/link";
import delay from "delay";
import IssueAction from "./IssueAction";
import { Issue, Status } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";

interface Props {
  searchParams: { status: Status; orderBy: keyof Issue };
}

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", className: "hidden sm:table-cell" },
  { label: "Created", value: "createdAt", className: "hidden sm:table-cell" },
];

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
  });
  await delay(2000);
  return (
    <div>
      <IssueAction />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell key={column.value}>
                <NextLink
                  href={{
                    query: { ...searchParams, orderBy: column.value },
                  }}
                >
                  {column.label}
                </NextLink>
                {column.value === searchParams.orderBy && (
                  <ArrowUpIcon className="inline" />
                )}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.ColumnHeaderCell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
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
export const dynamic = "force-dynamic";

export default IssuesPage;
