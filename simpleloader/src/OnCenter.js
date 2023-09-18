import Box from '@mui/material/Box';

export function OnCenter(props){
    return <Box display="flex" 
                sx={{
                    width:"100%",
                    height: "100%"
                }} 
                alignItems="center"
                justifyContent="center">
        {props.children}
    </Box>
}