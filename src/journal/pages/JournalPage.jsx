import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../Layout/JournalLayout";
import { NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {/* <Typography variant="h4">Journal Page</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      {/* Botón flotante */}
      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
