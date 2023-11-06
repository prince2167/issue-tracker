"use client";

import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { IssueStatusBadgae, Spinner } from ".";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const IssueStatusChooser = ({ issue }: { issue: Issue }) => {
  const [isSettingStatus, setIsSettingStatus] = useState(false);

  const changeStatus = async (status: any) => {
    try {
      setIsSettingStatus(true);
      await axios.patch("/api/issues/" + issue.id, {
        status: status,
      });
      setIsSettingStatus(false);
    } catch (error) {
      setIsSettingStatus(false);
      toast.error("Changes could not be saved");
    }
  };

  return (
    <Select.Root defaultValue={issue.status} onValueChange={changeStatus}>
      <Select.Trigger placeholder="Status" />
      <Select.Content>
        {Object.values(Status).map((item) => (
          <Select.Item key={item} value={item}>
            {isSettingStatus ? (
              <Spinner />
            ) : (
              <IssueStatusBadgae status={item} />
            )}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusChooser;
