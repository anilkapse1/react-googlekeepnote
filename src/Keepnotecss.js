import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    container: {
        maxWidth:'700px',
        border:'1px solid red',
        margin:'100px auto',
        padding:'20px',
    },
    formSection:{
        display:'flex',
        flexDirection:'column'
    },
    header: {
        backgroundColor: '#736b6b',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footer: {
        backgroundColor: '#736b6b',
        padding:'20px',
        color:'#eaad02',
        textAlign:'right',
    },


});

export default useStyles;