import React from 'react';
import Search from '@material-ui/icons/Search'
import { TextField, InputAdornment } from '@material-ui/core';

export default function SearchName(props) {
    const {
        searchTitle='Search Product'
    } = props
    return (
        <div className="searchName" >
            <div>
                <TextField
                    id="filled-search"
                    label={searchTitle}
                    type="search"
                    margin="normal"
                    variant="outlined"
                    value={props.onSearch}
                    onChange={props.onChangeName}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </div>
    )
}