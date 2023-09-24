import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRecoilValue } from "recoil";
import { userState } from "@recoil/user.ts";

interface OptionListProps {
  openSearchPage: () => void;
  openFetchPage: () => void;
}

function OptionList({ openSearchPage, openFetchPage }: OptionListProps) {
  const user = useRecoilValue(userState);
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
