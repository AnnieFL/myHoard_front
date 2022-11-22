import { api } from "../services";

export default class Server {
    static async baseGet(url, token) {
        try {
            const response = await api.get(url, {
                headers: {
                    Authorization: token
                }
            });
            console.log(response);

            return response.data;
        } catch (err) {
            console.log(err);
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
        }
    }

    static async basePut(url, body, token) {
        try {
            const response = await api.post(url, {
                ...body
            }, {
                headers: {
                    Authorization: token
                }
            })

            return response.data;
        } catch (err) {
            console.log(err)
        }
    }

    static async baseDelete(url, token) {
        try {
            const response = await api.post(url, {
                headers: {
                    Authorization: token
                }
            });

            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
}