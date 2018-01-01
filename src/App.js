import React, {Component} from 'react';
import ToDoList from './ToDoList';
import Grid from "material-ui/Grid";
import {withStyles} from "material-ui/styles";

const styles = (theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",

    },
});

class App extends Component {

    render() {
        //const { classes } = this.props;
        return (
            <div>
                <Grid spacing={0} container className="grid" alignItems="center" direction="column">
                <ToDoList/>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(App);
