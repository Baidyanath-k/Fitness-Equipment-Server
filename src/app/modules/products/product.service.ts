import QueryBuilder from "../../builder/queryBuilder";
import { TProducts } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (payload: TProducts) => {
    const result = await Product.create(payload);
    return result;
};

const findAllProductsFormDB = async (query: Record<string, unknown>) => {
    const searchTerm = ['name', 'price', 'description'];
    const productQuery = new QueryBuilder(Product.find(), query)
        .search(searchTerm)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = await productQuery.modelQuery;
    return result;
};

const findSingleProductFormDB = async (id: string) => {
    const result = await Product.findById(id);
    return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProducts>) => {
    const result = await Product.findByIdAndUpdate(id, payload,
        {
            new: true, runValidators: true
        },
    );
    return result;
};

const deleteProductIntoDB = async (id: string) => {
    const result = await Product.findByIdAndDelete(id, {
        isDeleted: true
    });
    return result;
}

export const ProductService = {
    createProductIntoDB,
    findAllProductsFormDB,
    findSingleProductFormDB,
    updateProductIntoDB,
    deleteProductIntoDB
}