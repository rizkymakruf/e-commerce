const Category = (props) => {
  return (
    <div
      onMouseOver={() => props.setCategory(true)}
      onMouseLeave={() => props.setCategory(false)}
      className={`w-full duration-150 h-auto fixed z-30 bg-white ${
        props.category ? "translate-y-0" : "-translate-y-96"
      } `}
    >
      <div className="flex h-44">
        <div className="w-1/4 bg-red-500"></div>
        <div className="w-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Category;
