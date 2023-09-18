export function ProgressStatus({attemptCount, maxAttemptCount}){
    return <span>{`Attempt: ${attemptCount} of ${maxAttemptCount}`}</span>
}