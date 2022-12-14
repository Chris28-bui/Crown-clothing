import CategoryItem from "../categories-item/component-item.component";


const Directory = ({categories}) => {
    return (
    <div className="categories-container">
      {categories.map((category) => {
        return(
          <CategoryItem key={category.id} category = {category}/>
        );
      })}
    </div>
    );
}
export default Directory;