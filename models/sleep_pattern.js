const db = require('./database');       
module.exports = {
    AddPattern: async function(pattern) {
        try {
            const result = await db.query('INSERT INTO pattern SET ?', pattern);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },

}
