import axios from "axios";

class themes {
    async getTheme() {
        try {
            const response = await axios.get('http://localhost:3500/themes')
            if (response) {
                return response.data
            }
        } catch (error) {
            throw error;
        }

    }
}

export default new themes;