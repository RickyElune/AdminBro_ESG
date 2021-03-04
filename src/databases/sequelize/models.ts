import { ProductModel } from "../../admin/resources/product/entities/sequelize";
import { UserModel } from "../../admin/resources/user/entities/sequelize";
import { AvailableModels } from "../models.type";
import { BrandModel } from "../../admin/resources/brand/entities/sequelize";
import { MediaModel } from "../../admin/resources/media/entities/sequelize";

export const models: Record<AvailableModels, any> = {
    Brand: BrandModel,
    Media: MediaModel,
    User: UserModel,
    Product: ProductModel,
};
