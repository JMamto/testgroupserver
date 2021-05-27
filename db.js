const {Pool} = require('pg');

const pool = new Pool({
    user: 'gjshykbpdoqahl',
    password: '11afa56748a27f5fb499e8cf4ec7c2f2cc295882bd6eef29cdcd2476d494d779',
    host: 'ec2-52-0-114-209.compute-1.amazonaws.com',
    port: 5432,
    database: 'd1kot69hfvptjh',
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = pool;