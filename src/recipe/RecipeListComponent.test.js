/**
 * Created by eliasmj on 16/02/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import RecipeListComponent from './RecipeListComponent';

describe("Recipe Component", ()=> {

    it("should load menu component", ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<RecipeListComponent />, div);
    });

});