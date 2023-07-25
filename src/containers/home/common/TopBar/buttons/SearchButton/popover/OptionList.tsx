import { List, ListItem, IconButton, ListItemText, ListItemButton } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface OptionListProps {
    openSearchInput: () => void;
}

function OptionList({ openSearchInput }: OptionListProps) {
    return (
        <List dense>
            <ListItem
                secondaryAction={
                    <IconButton edge="end">
                        <KeyboardArrowRightIcon />
                    </IconButton>
                }
                disablePadding
                onClick={openSearchInput}
            >
                <ListItemButton>
                    <ListItemText
                        primary="My 일정 검색하기"
                    />
                </ListItemButton>
            </ListItem>

            <ListItem
                secondaryAction={
                    <IconButton edge="end">
                        <KeyboardArrowRightIcon />
                    </IconButton>
                }
                disablePadding
                onClick={() => alert('결제 내역 불러오기')}
            >
                <ListItemButton>
                    <ListItemText
                        primary="My 결제 내역 불러오기"
                    />
                </ListItemButton>
            </ListItem>
        </List>
    );
}

export default OptionList;