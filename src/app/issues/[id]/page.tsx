import { notFound } from "next/navigation";
import prisma from "../../../../prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import IssueStatusBadgae from "@/components/IssueStatusBadgae";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadgae status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>{issue.description}</Card>
    </div>
  );
};

export default IssueDetailsPage;
