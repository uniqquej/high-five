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
    GetPattern: async function(user_id) {
        try {
            const result = await db.query('SELECT * FROM pattern where user_id = ?', user_id);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },
    DeletePattern: async function(user_id) {
        try {
            const result = await db.query('DELETE FROM pattern where user_id = ?',user_id);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },

}
