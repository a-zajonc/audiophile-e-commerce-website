import styles from "./index.module.css";
import { CategoryCard } from "./CategoryCard";
import headphones from "../../../images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../../images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../../images/shared/desktop/image-category-thumbnail-earphones.png";

const categoriesData = [
  { name: "Headphones", img: headphones },
  { name: "Speakers", img: speakers },
  { name: "Earphones", img: earphones },
];

export function Categories() {
  return (
    <div className={styles.box}>
      <div className={styles.categoriesBox}>
        {categoriesData.map((category) => {
          return (
            <CategoryCard
              category={category.name}
              img={category.img}
              key={category.name}
            />
          );
        })}
      </div>
    </div>
  );
}
