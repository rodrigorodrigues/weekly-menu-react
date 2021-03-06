import CloneDeep from 'lodash.clonedeep';
import Util from '../service/UtilCollectionService';

export const ShoppingListUtilService = {
    updateRecipesSelection(_currentRecList_, _updateItem_) {
        const updateRecipe = CloneDeep(_currentRecList_)
        const selectedProd = {..._updateItem_.product};
        // review this 3 loops later
        updateRecipe.forEach(rec => {
            rec.categories.forEach(cat => {
                cat.products.forEach(prod => {
                    if (prod._id === selectedProd._id) {
                        prod.checked = _updateItem_.checked
                    }
                })
            })
        })
        return updateRecipe
    },
    mergeCategories(recipes, categories) {
        const allCategoriesRecipe = Util
            .getAllSortCategoriesRecipe(recipes);

        const mergeProductOfCategory = category => {
            allCategoriesRecipe.forEach(catRecipe => {
                if (catRecipe.name === category.name) {
                    category.products = category.products.concat(catRecipe.products)
                }
            });
            return category;
        }

        const sortAllProducts = category => {
            category.products = category.products
                .sort((prodA, prodB) => prodA.name > prodB.name ? 1 : -1)
            return category;
        }

        const categoriesMerge =
            CloneDeep(categories)
                .map(mergeProductOfCategory)
                .sort((catA, catB) => catA.name > catB.name ? 1 : -1)

        const missingCats =
            addMissingCategories(allCategoriesRecipe, categoriesMerge)
            .map(sortAllProducts)

        return missingCats;
    },

    addRecInfoToProduct(recipes) {
        const mapProducts = (recipe, category) => {
            const newProds = category.products.map(product => {
                return {
                    ...product,
                    recName: recipe.name,
                    recId: recipe._id
                };
            })
            category.products = newProds;
            return category;
        }
        return recipes.map(recipe => {
            const newCategories =
                recipe.categories
                    .map(mapProducts.bind(null, recipe));
            recipe.categories = newCategories;
            return recipe;
        });
    },
    groupCategory(categories) {
        let result = []
        categories.forEach(category => {
            let categoryIn = result[category.name];
            if (categoryIn) {
                categoryIn.products = [...categoryIn.products, ...category.products]
            } else {
                result[category.name] = category
            }
            return result
        })
        return Object.entries(result).map(([key, values]) => values)
    }
}

function addMissingCategories(allCatsRecipe, categoriesMerge) {
    const catsMissing = allCatsRecipe.filter(cat => {
        const foundInCat = Util.findItemBinarySearch(cat.name, categoriesMerge)
        return foundInCat === false;
    })
    if (catsMissing.length) {
        const groupedCategories = ShoppingListUtilService
            .groupCategory(catsMissing)
        categoriesMerge = [...categoriesMerge, ...groupedCategories];
        return categoriesMerge;
    } else {
        return categoriesMerge;
    }
}


