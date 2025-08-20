
import { Link } from 'react-router-dom';
import '../assets/styles/categorycard.css';

function CategoryCard({ title, description , to }) {
    return (
        <Link to={to} style={{ textDecoration: 'none' , color: 'inherit' }}>
            <div className="category-card">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default CategoryCard;