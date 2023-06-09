const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize')


class UserService {

  async find() {
    const rta = await models.User.findAll({
      include: ['customer']
    })
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: { email }
    })
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if(!user) {
      throw boom.notFound('user not found')
    }
    return user;
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10)
    const newUser = await models.User.create({
      ...data,
      password: hash
    })
    // no retornar el hash del password por seguridad
    delete newUser.dataValues.password
    return newUser
  }

  async update(id, changes) {
    const user = this.findOne(id)
    const rta = await user.update(changes)
    return rta;
  }

  async delete(id) {
    const user = this.findOne(id)
    await user.destroy()
    return { id };
  }
}

module.exports = UserService;
