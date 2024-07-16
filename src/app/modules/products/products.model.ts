import { model, Schema } from "mongoose";
import { TProducts } from "./products.interface";

const ProductsSchema = new Schema<TProducts>(
    {
        name: {
            type: String,
            required: true,
            minlength: [1, 'Product name must be at least 1 characters long'],
        },
        image: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
            validate: {
                validator: function (v) {
                    return v >= 0;
                },
                message: props => `${props.value} is not a valid price! Price must be a non-negative number.`
            }
        },
        description: {
            type: String,
            required: true,
            minlength: [1, 'Product description must be at least 1 characters long'],
        }
    },
    {
        timestamps: true,
    }
);

export const Product = model<TProducts>("Product", ProductsSchema);