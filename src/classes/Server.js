import { api } from "../services";

export default class Server {
    static async baseGet(url, token) {
        try {
            let error = false;
            const response = await api.get(url, {
                headers: {
                    Authorization: token
                }
            }).catch((err) => {
                console.log(err);
                error = {error: {msg: err.response.data.msg}}
            })

            if (error) {
                return error;
            }
            
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    static async basePost(url, body, token) {
        try {
            let error = false;
            const response = await api.post(url, {
                ...body
            }, {
                headers: {
                    Authorization: token
                }
            }).catch((err) => {
                console.log(err);
                error = {error: {msg: err.response.data.msg}}
            })

            if (error) {
                return error;
            }

            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    static async basePut(url, body, token) {
        try {
            let error = false;
            const response = await api.put(url, {
                ...body
            }, {
                headers: {
                    Authorization: token
                }
            }).catch((err) => {
                console.log(err);
                error = {error: {msg: err.response.data.msg}}
            })

            if (error) {
                return error;
            }
            
            return response.data;
        } catch (err) {
            console.log(err)
            return [];
        }
    }

    static async baseDelete(url, token) {
        try {
            let error = false;
            const response = await api.delete(url, {
                headers: {
                    Authorization: token
                }
            }).catch((err) => {
                console.log(err);
                error = {error: {msg: err.response.data.msg}}
            })

            if (error) {
                return error;
            }
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}