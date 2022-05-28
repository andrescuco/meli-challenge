import s from "./BreadCrumb.module.css";

type BreadCrumbProps = {
  categories: string[];
};

function BreadCrumb({ categories }: BreadCrumbProps) {
  return (
    <div className={s.grid}>
      <div className={s.container}>
        {categories.map((category: string, index) => {
          const isLastCategory = index === categories.length - 1;

          if (isLastCategory) return <span>&nbsp;{category}</span>;
          return <span>&nbsp;{category} &gt;</span>
        })}
      </div>
    </div>
  );
}

export default BreadCrumb;
