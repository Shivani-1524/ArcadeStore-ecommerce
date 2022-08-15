import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

export const getAddressItemsHandler = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    if (!userId) {
        new Response(
            404,
            {},
            {
                errors: ["The email you entered is not Registered. Not Found error"],
            }
        );
    }
    const userAddress = schema.users.findBy({ _id: userId }).addresses;
    return new Response(200, {}, { addresses: userAddress });
};

export const addAddressToProfile = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: ["The email you entered is not Registered. Not Found error"],
                }
            );
        }
        const userAddress = schema.users.findBy({ _id: userId }).addresses;
        const { address } = JSON.parse(request.requestBody);
        userAddress.push({
            ...address,
            createdAt: formatDate(),
            updatedAt: formatDate(),
        });
        this.db.users.update({ _id: userId }, { addresses: userAddress });
        return new Response(201, {}, { addresses: userAddress });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};

// export const deleteAddressFromProfile = function (schema, request) {
//     const userId = requiresAuth.call(this, request);
//     try {
//         if (!userId) {
//             new Response(
//                 404,
//                 {},
//                 {
//                     errors: ["The email you entered is not Registered. Not Found error"],
//                 }
//             );
//         }

//         const addressId = request.params.addressId;
//         userAddress = userAddress.filter((item) => item._id !== addressId);
//         this.db.users.update({ _id: userId }, { addresses: userAddress });
//         return new Response(201, {}, { addresses: userAddress });
//     } catch (error) {
//         return new Response(
//             500,
//             {},
//             {
//                 error,
//             }
//         );
//     }
// };

export const editAddress = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: ["The email you entered is not Registered. Not Found error"],
                }
            );
        }
        const userAddress = schema.users.findBy({ _id: userId }).addresses;
        const { address } = JSON.parse(request.requestBody);
        const addressId = address._id
        userAddress.forEach((item) => {
            if (item._id === addressId) {
                item = address
            }
        });
        this.db.users.update({ _id: userId }, { addresses: userAddress });
        return new Response(201, {}, { addresses: userAddress });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};

