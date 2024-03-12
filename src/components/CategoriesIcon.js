import "./CategoriesIcon.css"

const CategoriesIcon = ({ onClick, image, text }) => {
    return (
        <div className="Icon">
            <p>{text}</p>
            <img src={image} alt={""} onClick={onClick} className="categoryImage"/>
        </div>
    );
}

export default CategoriesIcon;