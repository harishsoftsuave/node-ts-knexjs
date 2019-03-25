import {Body, Controller, Get, JsonController, Param, Post, Req, Res} from "routing-controllers";
import {createUser, getAllUsers, getUserById, updateUser} from "../services/UserServices";

@JsonController("/users")
export class UserController {

    @Get("")
    getAll() {
        return getAllUsers();
    }

    @Get("/:id")
    getUserById(@Param('id') id: number, @Res() res: any) {
        return getUserById(id, res);
    }

    @Post("/create")
    createUser(@Body() user: any, @Res() res: any) {
        return createUser(user, res);
    }

    @Post("/update")
    updateUser(@Body() user: any, @Res() res: any) {
        return updateUser(user, res);
    }

}
