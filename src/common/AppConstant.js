export const AppConstant = {
    LOCATION: {
        dashboard: { path: '/', label: 'Dashboard', menu: false  },
        products: { path: '/products', label: 'Products', menu: true  },
        login: { path: '/login', label: 'Login', menu: true  },
        newShoppingList: { path:'/newshopping', label: 'New Shopping List', menu: true },
        editShoppingList: { path:'/editshopping', label: '', menu: false },
        shoppingHistory: { path: '/shoppinghistory', label: 'Shopping history', menu: true  },
        recipeList: { path: '/recipe', label: 'Recipe List' , menu: true },
        newRecipe: { path: '/recipeCreate/new', label:  'New Recipe' , menu: true },
        category: { path: '/category', label: '', menu: false  },
        ProductFormPage: { path: '/product', label: '', menu: false  },
        shopping: { path: '/shopping', label: 'Shopping List', menu: false  }
    },
    PARENT_COMPONENT: {
        RECIPE_PAGE: 'RecipePage',
        RECIPE_LIST_PAGE: 'RecipeListPage',
        SHOPPING_LIST_PAGE: 'ShoppingListPage',
        INVENTORY_PAGE: 'InventoryPage'
    }
}