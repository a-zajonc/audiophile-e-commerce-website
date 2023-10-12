import styles from "./index.module.scss";
import { CategoryCard } from "./CategoryCard";
import headphones from "../../../images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../../images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../../images/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";
import { Stack } from "../../../Components/Stack";

const categoriesData = [
  { url: "headphones", name: "Headphones", img: headphones },
  { url: "speakers", name: "Speakers", img: speakers },
  { url: "earphones", name: "Earphones", img: earphones },
];

export function Categories() {
  return (
    <Stack className={styles.box} orientation="horizontal" gap="30px">
      {categoriesData.map((category) => {
        return (
          <div className={styles.container} key={category.name}>
            <Link to={`/category/${category.name.toLowerCase()}`}>
              <CategoryCard
                category={category.name}
                img={category.img}
                key={category.name}
              />
            </Link>
          </div>
        );
      })}
    </Stack>
  );
}
