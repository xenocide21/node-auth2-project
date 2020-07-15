const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findById,
    findBy
}

function find() {
    return db.select('*').from('users')
}

function findById(id) {
    return db('users').where({id})
}

function findBy(filter) {
    return db("users")
        .select("username", "password")
        .where(filter);
}


function add(user) {
    return db('users')
        .insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}