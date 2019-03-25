import Knex = require("knex");
const knexConfig = require("./../../knexfile");
const knex = Knex(knexConfig.development);

export async function getAllUsers() {
    return knex("user");
}

export async function getUserById(id: number, res: any) {
    try {
        const user = await knex('user').where('id', id).first();
        if (!user) {
            res.status(200).send({
                status: 'fail',
                message: 'User does not exist'
            })
        } else {
            res.status(404).send( {
                status: 'success',
                data: user
            });
        }
    } catch (e) {
        console.log("Exception occured while creating user", e);
        res.status(400).send({
            status: 'error',
            message: e.detail
        });
    }
}

export async function createUser(user: any, res: any) {
    try {
        const result = await knex("user").insert({'email' : user.email, 'first_name' : user.first_name, 'last_name' : user.last_name});
        res.status(200).send({
            status: 'success',
            data: result
        });

    } catch (e) {
        console.log("Exception occurred while creating user", e);
        res.status(400).send({
            status: 'error',
            message: e.detail
        });
    }
}

export async function updateUser(user: any, res: any) {
    try {
        const result = await knex("user").where('id','=',user.id).update({'email' : user.email, 'first_name' : user.first_name, 'last_name' : user.last_name});
        if(result == 1){
            res.status(200).send({
                status: 'success',
                msg: "user updated successfully"
            });
        } else{
            res.status(403).send({
                status: 'fail',
                message: 'User does not exist'
            });
        }
    } catch (e) {
        console.log("Exception occured while creating user", e);
        res.status(400).send({
            status: 'error',
            message: e.detail
        });
    }
}
