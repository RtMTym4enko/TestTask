import { DisplayFact } from './DisplayFact';
import { OnCenter } from './OnCenter';

function App() {
  const maxAttemptCount = Number(process.env.REACT_APP_MAX_ATTEMPT_COUNT)
  return (
      <OnCenter>
        <DisplayFact maxAttemptCount={maxAttemptCount} />
      </OnCenter>
  );
}

export default App;
