
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import useStyles from './Keepnotecss';

const Note=(props)=>{

    const deleteNote=()=>{
        props.deleteItem(props.id);
    }

    
    const classes = useStyles();
    return(
        <>
            <div className={classes.note}>
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <br/>
                <Button onClick={deleteNote}><DeleteIcon/></Button>
                
            </div>
        </>
    )
}
export default Note;