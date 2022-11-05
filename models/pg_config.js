const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'sokkticsvdxyqf',
        password:'5975a7ba47dfac6e50ea6a6b6262c5ade2a6463c37389881efe0f70716c45530',
        host:'ec2-54-86-214-124.compute-1.amazonaws.com',
        database:'d15d4td7etu9nv',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    }
);
module.exports = pg_conn;