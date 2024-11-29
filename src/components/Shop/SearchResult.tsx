import { ProductJson } from "./ProductJson";
export const SearchResult: React.FC = () => {
  let ProductArray = ProductJson;
  return (
    <div>
      <ul>
        {ProductArray.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="w-full h-48 bg-gray-200">
              <img src={product.productImage} alt="" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                {product.nameOfProduct}
              </h3>
              <p className="text-gray-500 mb-4">${product.ammountOfProduct}</p>
              <button className="w-full bg-logo-orange text-white font-bold py-2 rounded-lg hover:bg-orange-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
