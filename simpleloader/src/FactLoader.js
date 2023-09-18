import { useCallback, useEffect, useState } from "react"
import { Button } from "./Button";
import { ProgressStatus } from "./ProgressStatus";

export function FactLoader({maxAttemptCount, onLoadCallback, onAttemptsExceeded}){
    const [isLoading, setIsLoading] = useState(false);
    const [attemptCount, setAttemptCount] = useState(1);

    const tryAgain = useCallback(() => {
        const timeOut = attemptCount * 1000;
        console.log(`onError ${attemptCount} ${timeOut}`);
        if(attemptCount < maxAttemptCount){
            setTimeout(()=> setAttemptCount(attemptCount + 1), timeOut);
        }else{
            onAttemptsExceeded();
        }
    },[attemptCount, maxAttemptCount, onAttemptsExceeded]);

    const loadData = useCallback(async () => {
        try{
            var response = await fetch("https://catfact.ninja/fact")
            var json = await response.json();
            onLoadCallback(json.fact);
        }catch(error){
            tryAgain();
        }
    },[onLoadCallback, tryAgain]);

    useEffect(()=>{
        if(isLoading)
        {
            loadData();
        }
    }, [isLoading, loadData]);

    return isLoading ? <ProgressStatus attemptCount={attemptCount} maxAttemptCount={maxAttemptCount} /> : <Button text="Load" onPressCallback = {() => setIsLoading(true)} />
}