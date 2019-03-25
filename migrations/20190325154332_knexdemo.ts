import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    await knex.schema.dropTableIfExists("user").createTable("user", table =>{
        table.increments("id").primary();
        table.string("email").notNullable().unique();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
    });
};


export async function down(knex: Knex): Promise<any> {
    await knex.schema.dropTable("user");
};

