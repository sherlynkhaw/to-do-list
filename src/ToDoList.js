import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import MyList from './List';

const styles = theme => ({
    card: {
        width: 275,
        margin: 20,
        padding: 30
    },
});

class ToDoList extends Component {

    constructor() {
        super();
        this.list = new MyList();

        this.state = {
            list: this.list.items,
            newItem: ""
        };
    }

    handleChange(event) {
        this.setState({
            newItem: event.target.value
        });
    }

    handleAdd() {
        this.list.add(this.state.newItem);

        this.setState({
            list: this.list.items,
            newItem: ""
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        {/*List Items*/}
                        <List>
                            {this.state.list.map((item, index) => (
                                <ListItem
                                    key={index}
                                >
                                    <ListItemText primary={item}/>
                                    <ListItemSecondaryAction>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                    <CardActions>
                        {/*List Input*/}
                        <TextField
                            id="listNewItem"
                            label="New Item"
                            margin="normal"
                            value={this.state.newItem}
                            onChange={this.handleChange.bind(this)}
                        />
                        <Button
                            id="addButton"
                            raised
                            onClick={this.handleAdd.bind(this)}
                        >
                            Add
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(ToDoList);