const { User } = require('../models');
const { sign } = require('../helpers/jwt-helpers');
const { comparePassword } = require('../helpers/bcrypt-helpers');
const axios = require('axios');

class ClientController {
  static async register(req, res, next) {
    const { email, password } = req.body;
    try {
      const newUser = await User.create({
        email,
        password,
      });
      res.status(201).json({
        id: newUser.id,
        email: newUser.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async signIn(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        attributes: { email, password },
        where: { email },
      });
      if (!user) throw { name: 'EmailorPasswordNotFound' };
      else if (!user.length === undefined) throw { name: 'EmailorPasswordNotFound' };
      else if (!comparePassword(password, user.password)) throw { name: 'InvalidPassword' };
      const access_token = sign({ id: user.id, email });
      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getJobs(req, res, next) {
    const { description, location, full_time, page } = req.query;
    const apiUrl = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json`;

    try {
      const response = await axios.get(apiUrl, {
        params: {
          description,
          location,
          full_time,
          page,
        },
      });

      return res.json(response.data);
    } catch (error) {
      next(error);
    }
  }

  static async getJobDetail(req, res, next) {
    const { id } = req.params;
    const apiUrl = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`;

    try {
      const response = await axios.get(apiUrl);
      return res.json(response.data);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = ClientController;
