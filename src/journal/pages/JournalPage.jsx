import { Typography } from "@mui/material";
import { JournalLayout } from "../Layout/JournalLayout";
import { NoteView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h4">Journal Page</Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  );
};
