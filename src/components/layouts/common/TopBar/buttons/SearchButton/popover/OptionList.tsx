import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useUser } from "@app/tanstack-query/useUser.ts";

interface OptionListProps {
  openSearchPage: () => void;
  openFetchPage: () => void;
}

function OptionList({ openSearchPage, openFetchPage }: OptionListProps) {
  const { data: user } = useUser();
  return (
    <List dense>
      <ListItem
        secondaryAction={
          <IconButton edge="end" disabled={!user}>
            <KeyboardArrowRightIcon />
          </IconButton>
        }
        disablePadding
        onClick={openSearchPage}
      >
        <ListItemButton disabled={!user}>
          <ListItemText primary="My 일정 검색하기" />
        </ListItemButton>
      </ListItem>

      <ListItem
        secondaryAction={
          <IconButton edge="end" disabled={!user}>
            <KeyboardArrowRightIcon />
          </IconButton>
        }
        disablePadding
        onClick={openFetchPage}
      >
        <ListItemButton disabled={!user}>
          <ListItemText primary="My 결제 내역 불러오기" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default OptionList;
