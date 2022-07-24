import {
    useState,
    useEffect,
    Fragment
} from 'react';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';

import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';

import { CategoryContainer, Title } from './Category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category}</Title>
            {
                isLoading ?
                    <Spinner /> :
                    <CategoryContainer>
                        {
                            products && products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </CategoryContainer>
            }
        </Fragment>
    )
};

export default Category;