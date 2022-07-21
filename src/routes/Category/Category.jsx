import {
    useState,
    useEffect,
    Fragment
} from 'react';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import ProductCard from '../../components/ProductCard/ProductCard';

import { CategoryContainer, Title } from './Category.styles.jsx';

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    const { category } = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category}</Title>
            <CategoryContainer>
                {
                    products && products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </CategoryContainer>
        </Fragment>
    )
};

export default Category;