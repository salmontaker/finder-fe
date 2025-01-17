import { Icon } from "@fluentui/react";
import { useEffect, useState } from "react";
import Modal from "react-modal";

import { categories, CategoryData, Subcategory } from "@/pages/write/Category/Data";
import useStyles from "@/pages/write/Category/index.css";
import useWriteStore from "@/stores/write";

Modal.setAppElement("#root");

function WriteCategory() {
  const styles = useStyles();

  const {
    selectedCategory,
    selectedSubcategory,
    setSelectedCategory,
    setSelectedSubcategory,
    setLostName
  } = useWriteStore();

  const [category, setCategory] = useState<CategoryData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallModal, setIsSmallModal] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setCategory(null);
    setIsSmallModal(false);
  };

  const handleCategorySelect = (category: CategoryData) => {
    setCategory(category);
    setIsSmallModal(true);
  };

  const handleSubcategorySelect = (subcategory: Subcategory) => {
    setSelectedCategory(category?.name);
    setSelectedSubcategory(subcategory.name);
    setLostName(subcategory.name);
    closeModal();
  };

  useEffect(() => {
    if (!selectedCategory || !selectedSubcategory) {
      setIsOpen(true);
    }
  }, []);

  return (
    <div>
      {(!category || category.subcategories.length === 0) && (
        <button className={styles.button} onClick={() => setIsOpen(true)}>
          카테고리 선택
        </button>
      )}

      <Modal
        className={`${styles.modalContent} ${isSmallModal ? styles.modalContentSmall : ""}`}
        contentLabel="Category Select"
        isOpen={isOpen}
        overlayClassName={styles.modalOverlay}
        onRequestClose={closeModal}
      >
        <h1 className={styles.title}>{category ? `${category.name}의` : ""} 카테고리 선택</h1>
        {!category ? (
          <div className={styles.gridContainer}>
            {categories.map(function (category, index) {
              return (
                <div
                  key={index}
                  className={styles.gridItem}
                  onClick={() => handleCategorySelect(category)}
                >
                  <Icon className={styles.icon} iconName={category.icon.iconName} />
                  {category.name}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2 className={styles.title}>소분류 선택</h2>
            <ul className={styles.subcategoryList}>
              {category.subcategories.map((subcategory, subIndex) => {
                return (
                  <li
                    key={subIndex}
                    className={`${styles.subcategoryItem} ${styles.subcategoryItemHover}`}
                    onClick={() => handleSubcategorySelect(subcategory)}
                  >
                    {subcategory.name}
                  </li>
                );
              })}
            </ul>
            <div className={styles.buttonContainer}>
              <button
                className={styles.button}
                onClick={() => {
                  setCategory(null);
                  setIsSmallModal(false);
                }}
              >
                다시 선택
              </button>
              <button className={styles.button} onClick={closeModal}>
                닫기
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default WriteCategory;
