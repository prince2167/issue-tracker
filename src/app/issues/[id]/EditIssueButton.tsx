import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Link href={`/issues/${issueId}/edit`} className="flex gap-3 items-center">
        <Pencil2Icon />
        Edit Issue
      </Link>
    </Button>
  );
};

export default EditIssueButton;
