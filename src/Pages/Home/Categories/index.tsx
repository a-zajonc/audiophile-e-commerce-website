import styles from "./index.module.css";
import { CategoryCard } from "./CategoryCard";
import headphones from "../../../images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../../images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../../images/shared/desktop/image-category-thumbnail-earphones.png";
import { useParams, Link } from "react-router-dom";

const categoriesData = [
  { url: "headphones", name: "Headphones", img: headphones },
  { name: "Speakers", img: speakers },
  { name: "Earphones", img: earphones },
];

export function Categories() {
  return (
    <div className={styles.box}>
      <div className={styles.categoriesBox}>
        {categoriesData.map((category) => {
          console.log(category.name);
          return (
            <Link to={`/category/${category.name}`}>
              <CategoryCard
                category={category.name}
                img={category.img}
                key={category.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
