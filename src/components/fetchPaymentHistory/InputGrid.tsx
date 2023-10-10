import { Box, Grid } from "@mui/material";
import { JSXElementConstructor } from "react";

interface InputGridProps{
    children: JSX.Element;
    title: string;
}

function InputGrid({ children, title }: InputGridProps) {
    return (
        <Grid container>
            <Grid xs="auto" item sx={{ paddingRight: "8px" }}>
                <Box sx={{ textAlign: 'center', padding: '8px 12px', border: '1.4px solid var(--main-01, #735BF2)', borderRadius: '4px', fontSize: '14px' }}>{title}</Box>
            </Grid>
            {children}
        </Grid>
    );
}

export default InputGrid;
