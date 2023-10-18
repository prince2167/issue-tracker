"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          className="bg-red-500 hover:bg-red-600 cursor-pointer"
          color="red"
        >
          Delete Issue
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to delete this issue? This action cannot be
          Undone.
        </AlertDialog.Description>
        <Flex mt="4" gap="4" justify="end">
          <AlertDialog.Cancel>
            <Button
              className="bg-gray-200 hover:bg-gray-300 cursor-pointer"
              variant="soft"
              color="gray"
            >
              Cancel
            </Button>
          </AlertDialog.Cancel>

          <AlertDialog.Action>
            <Button
              className="bg-red-500 hover:bg-red-600 cursor-pointer"
              color="red"
            >
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
