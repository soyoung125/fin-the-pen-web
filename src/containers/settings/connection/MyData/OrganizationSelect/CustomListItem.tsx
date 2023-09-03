import { IconButton, ListItem, ListItemText } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface CustomListItemProps {
    item: {name: string, value: string},
    isChecked: boolean,
    handleSelectOrganization: (org: {name: string, value: string}) => void,
}

function CustomListItem({ item, isChecked, handleSelectOrganization }: CustomListItemProps) {
    return (
        <ListItem
            key={Math.random()}
            button
            onClick={() => handleSelectOrganization(item)}
            secondaryAction={
                <IconButton aria-label="comment">
                    {isChecked ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                </IconButton>
            }>
            <ListItemText primary={item.name} />
        </ListItem>
    );
}

export default CustomListItem;
