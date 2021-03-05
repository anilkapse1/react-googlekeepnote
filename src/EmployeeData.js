import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardStyle:{
        width:270,
        display:'inline-block',
        margin:'20px',
    }
});

const EmployeeData = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <>
      
            <Card className={classes.root} className={classes.cardStyle}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {props.userName}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {props.date}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Project: {props.project}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Task:
                            <ul>
                            <li>{props.task1}</li>
                            <li>{props.task2}</li>
                            </ul> 
                        </Typography>
                    </CardContent>
                </Card>

        
        </>
    )

}

export default EmployeeData;