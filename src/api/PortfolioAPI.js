import axios from 'axios';

const PortfolioAPI = {
    /**
     * Login.
     *
     * @param {String} token - Access token.
     * 
     * @return {Array} Portfolio objects.
     */
    GetAllPortfolio: async (token) => {
        try {
            const res = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/api/v1/accounts", {
                'headers': { 'Authorization': "bearer " + token }
            });
            if (!res.status === 200) {
                throw Error(res.statusText);
            }
            return res.data;
        } catch (error) {
            throw error.response.data.detail;
        }
    },
    /**
     * Create Portfolio.
     *
     * 
     * @param {string} portfolioName Portfolio Name
     * @param {String} token - Access token.
     * 
     */
    CreatePortfolio: async (portfolioName, token) => {
        try {
            const data = {
                portfolioName: portfolioName
            }
            const res = await axios.post(process.env.REACT_APP_API_ENDPOINT + "/api/v1/accounts", data, {
                'headers': { 'Authorization': "bearer " + token }
            });
            if (!res.status === 200) {
                throw Error(res.statusText);
            }
            return res.data;
        } catch (error) {
            throw error.response.data.detail;
        }
    },
    /**
     * Get Portfolio Detail.
     *
     * 
     * @param {string} id Portfolio id
     * @param {String} token - Access token.
     * 
     */
    GetPortfolioDetail: async (id, token) => {
        try {
            const res = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/api/v1/accounts/" + id, {
                'headers': { 'Authorization': "bearer " + token }
            });
            if (!res.status === 200) {
                throw Error(res.statusText);
            }
            return res.data;
        } catch (error) {
            throw error.response.data.detail;
        }
    },
    /**
     * Get Portfolio Detail.
     *
     * 
     * @param {string} id Portfolio id
     * @param {String} token - Access token.
     * 
     */
    AddStockToPortfolio: async (id, symbol, token) => {
        try {
            const data = {
                update_symbol: symbol,
                update_operation: "add"
            }
            const res = await axios.put(process.env.REACT_APP_API_ENDPOINT + "/api/v1/accounts/" + id, data, {
                'headers': { 'Authorization': "bearer " + token }
            });
            if (!res.status === 200) {
                throw Error(res.statusText);
            }
            return res.data;
        } catch (error) {
            throw error.response.data.detail;
        }
    },
    /**
     * Remove stock from a portfolio.
     *
     * 
     * @param {string} id Portfolio id
     * @param {String} token - Access token.
     * 
     */
     RemoveStockFromPortfolio: async (id, symbol, token) => {
        try {
            const data = {
                update_symbol: symbol,
                update_operation: "remove"
            }
            const res = await axios.put(process.env.REACT_APP_API_ENDPOINT + "/api/v1/accounts/" + id, data, {
                'headers': { 'Authorization': "bearer " + token }
            });
            if (!res.status === 200) {
                throw Error(res.statusText);
            }
            return res.data;
        } catch (error) {
            throw error.response.data.detail;
        }
    },
}

export default PortfolioAPI;