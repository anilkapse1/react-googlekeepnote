import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        maxWidth:'700px',
        margin:'100px auto',
        padding:'20px',
    },
    formSection:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
        height:'250px'

    },
    header: {
        backgroundColor: '#736b6b',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    gridContainer:{
        display: 'grid',
        maxWidth: '960px',
        margin: '0px auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr));',
        gridGap:'20px',

    },
    note:{
        border:'1px solid grey',
        padding:'5px'
    }


});

export default useStyles;