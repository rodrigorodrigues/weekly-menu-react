import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { grey } from '@material-ui/core/colors';
import CategoryActions from '../CategoryActions';
import DisplayService from './CategoryDisplayService';

export default function CategoryLine(props) {
    const categoryButtons = () => {
        return DisplayService
            .categoryBtns(props.parentComponent).display ?
            <CategoryActions
                name={props.category.name}
                id={props.category._id}
                category={props.category}
                onHandleMessage={props.onHandleMessage}
                onRefresh={props.onRefresh}>
            </CategoryActions>
            : ''
    }
    const content = () => {
        if (DisplayService.categoryLineHide(props.parentComponent).display) {
            return ''
        }
        return (
            <ListItem
                style={{ backgroundColor: grey[200] }}
                key={props.category._id}>
                <ListItemText primary={props.category.name} ></ListItemText>
                {categoryButtons()}
            </ListItem>
        )
    }
    return (
        <div>
            {content()}
        </div>

    )
}