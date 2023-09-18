import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export function ProgressStatus({attemptCount, maxAttemptCount}){
    const value = attemptCount / maxAttemptCount * 100;
    return <Stack direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
        <span>{`Attempt: ${attemptCount} of ${maxAttemptCount}`}</span>
        <CircularProgress variant="determinate" value={value} />
    </Stack>
}