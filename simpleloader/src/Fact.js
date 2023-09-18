import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';

export function Fact({content}){
    return <Card sx={{ maxWidth: 450 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fact <PetsIcon sx={{verticalAlign: "text-top"}}/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
    </Card>
}