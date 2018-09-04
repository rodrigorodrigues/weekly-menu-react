import React from 'react';
import { AppConstant } from '../../common/AppConstant';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

export const CategoryActions = (props) => {
    // TODO add test to params
    const queryParam = `?name=${props.name}&_id=${props.id}`;
    const buttons = (
        <div>
            <Button color="primary">
                <Link 
                    to={AppConstant.PATH.CATEGORY + '/' + props.id + '?name=' + props.name}>Edit</Link>
            </Button>
            <Button color="primary">
                <Link to={AppConstant.PATH.PRODUCTS + queryParam}>New Product</Link>
            </Button>
        </div>
    )
    return buttons;
}