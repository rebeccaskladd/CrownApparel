import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard/ProductCard';

import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {

    return (
        <div className="preview-container">
            <h2>
                <Link to={title}>
                    <span className="title">{title.toUpperCase()}</span>
                </Link>
            </h2>
            <div className="preview">
                {
                    products
                        .filter((_, index) => index < 4)
                        .map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;