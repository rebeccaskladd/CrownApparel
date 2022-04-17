import './Directory.scss';
import CategoryItem from './../CategoryItem/CategoryItem';

const Directory = ({ categories }) => {
    return (
        <div className="category-container">
            {
                categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))
            }
        </div>
    )
}

export default Directory;