import AdminBro, { AdminBroOptions } from "admin-bro";
import * as UserAdmin from "./resources/user";
import * as MediaAdmin from "./resources/media";
import * as BrandAdmin from "./resources/brand";
import * as ProductAdmin from "./resources/product";
import * as TagAdmin from "./resources/tag";

const rootPath = "/admin";

export const options: AdminBroOptions = {
    rootPath,
    version: {
        admin: true,
    },
    dashboard: {
        handler: async () => {
            return { some: "output" };
        },
        component: AdminBro.bundle("../../../src/admin/components/dashboard"),
    },
    resources: [UserAdmin, ProductAdmin, MediaAdmin, BrandAdmin, TagAdmin],
};
