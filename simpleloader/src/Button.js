export function Button({text, onPressCallback}){
    return <button onClick={onPressCallback}>{text}</button>
}