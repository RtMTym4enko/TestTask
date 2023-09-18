import { useState } from "react";
import { FactLoader } from "./FactLoader";
import { Fact } from "./Fact";

export function DisplayFact({maxAttemptCount = 10}){
    const [data, setData] = useState();
    const [key, setKey] = useState(0);

    if(data == null){
        return <FactLoader key={key}
                        maxAttemptCount={maxAttemptCount} 
                        onLoadCallback={(data) => setData(data)}
                        onAttemptsExceeded={() => setKey(key + 1)} />
    }
    return <Fact content={data} />
}