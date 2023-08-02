import { List, ListItem, IconButton, ListItemText, ListItemButton } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../../../app/redux/slices/userSlice";

interface OptionListProps {
    openSearchInput: () => void;
    handleOpenModal: () => void;
}

function OptionList({ openSearchInput, handleOpenModal }: OptionListProps) {
    const user = useSelector(selectUser);
    return (
        <List dense>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" disabled={!user}>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                }
                disablePadding
                onClick={openSearchInput}
            >
                <ListItemButton disabled={!user}>
                    <ListItemText
                        primary="My 일정 검색하기"
                    />
                </ListItemButton>
            </ListItem>

            <ListItem
                secondaryAction={
                    <IconButton edge="end" disabled={!user}>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                }
                disablePadding
                onClick={handleOpenModal}
            >
                <ListItemButton disabled={!user}>
                    <ListItemText
                        primary="My 결제 내역 불러오기"
                    />
                </ListItemButton>
            </ListItem>
        </List>
    );
}

export default OptionList;