import "../css/index.css";

function Dialog({onClose}){
    return(
        <div className = "dialog">
            <p>Hey there!</p>
            <button class = "dialog-button" onClick ={onClose}>Close</button>
        </div>
    )
}

export default Dialog;
