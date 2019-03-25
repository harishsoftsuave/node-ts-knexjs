
module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: 'knexjsdemo',
            user: 'knex',
            password: 'root'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex-migration'
        }
    }
}
