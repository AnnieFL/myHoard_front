import { api } from "../services";

export default class Server {
    static async baseGet(url, token) {
        try {
            const response = await api.get(url, {
                headers: {
                    Authorization: token
                }
            });

            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    static async basePost(url, body, token) {
        try {
            const response = await api.post(url, {
                ...body
            }, {
                headers: {
                    Authorization: token
                }
            });

            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    static async basePut(url, body, token) {
        try {
            const response = await api.put(url, {
                ...body
            }, {
                headers: {
                    Authorization: token
                }
            })

            return response.data;
        } catch (err) {
            console.log(err)
            return [];
        }
    }

    static async baseDelete(url, token) {
        try {
            const response = await api.delete(url, {
                headers: {
                    Authorization: token
                }
            });

            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}