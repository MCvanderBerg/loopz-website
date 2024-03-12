import "./Categories.css"

const CategoriesLabel = ({ text }) => {
    return (
        <div className="CategoriesLabel">
            <p className="TextLabel">
                {text}
            </p>
        </div>
    )
}

export default CategoriesLabel;