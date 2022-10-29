const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'tiemezysjcpdtl',
        password:'b4ddfb034bc4d400cd4dfa2a3e437f7fe48516182cec5cbdcbb3c95e4ef2abe9',
        host:'ec2-3-220-207-90.compute-1.amazonaws.com',
        database:'d2hpj13ldcbqn8',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    }
);
module.exports = pg_conn;