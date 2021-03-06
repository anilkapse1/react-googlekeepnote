
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
const Note=()=>{

    return(
        <>
            <div className="note">
                <h1>title</h1>
                <br/>
                <p>content......</p>
                <br/>
                <Button><DeleteIcon/></Button>
                
            </div>
        </>
    )
}
export default Note;