const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'ycqyvabesibdmp',
        password:'3e74f21a14386878b9d9f05c7b72fd172d324091789f3ed592736187ceb028b0',
        host:'ec2-54-147-36-107.compute-1.amazonaws.com',
        database:'dfr2r7u48k4aq6',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    }
);
module.exports = pg_conn;