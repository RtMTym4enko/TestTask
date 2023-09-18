import MaterialButton from '@mui/material/Button';

export function Button({text, icon, onPressCallback}){
    return <MaterialButton variant="contained" 
                            size="large" 
                            color="success" 
                            endIcon={icon} 
                            onClick={onPressCallback}>
                                {text}
    </MaterialButton>
}