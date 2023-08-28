const db = require('./database');       
module.exports = {
    AddUser: async function(user) {
        try {
            const result = await db.query('INSERT INTO user SET ?', user);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },
    
    GetUser: async function(id) {
        try {
            const result = await db.query('SELECT * from user where id = ?', id);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },
    UpdateRing: async function(ring,user_id) {
        try {
            const result = await db.query('UPDATE ring SET ring=? WHERE user_id=?', [ring,user_id]);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },
    GetRing: async function(user_id) {
        try {
            const result = await db.query('SELECT * from ring where user_id = ?', user_id);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },
    AddRing: async function(ring) {
        try {
            const result = await db.query('INSERT INTO ring SET ?', ring);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },


}
