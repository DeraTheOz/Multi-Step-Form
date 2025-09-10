function Button({ children, oncClick, type }) {
  return (
    <div className="col-span-full col-start-2 mx-16 mt-20 mb-4 text-right">
      <button
        oncClick={oncClick}
        className={
          type === "next"
            ? "btn-next"
            : type === "confirm"
            ? "btn-confirm"
            : "btn-back"
        }
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
