import Shimmer from "./Shimmer";
const ShimmerCardList = () => {
    return (
      <div className="flex flex-wrap gap-4">
        {Array(14).fill(0).map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  };
  export default ShimmerCardList