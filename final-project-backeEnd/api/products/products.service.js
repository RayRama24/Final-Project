const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into products(name, quantity,category, price, image, deskription) 
                values(?,?,?,?,?,?)`,
      [data.name, data.quantity, data.category, data.price, data.image, data.deskription],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getProduct: (callBack) => {
    pool.query(`select id, name, quantity,category, price, image, deskription from products`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getProductById: (id, callBack) => {
    pool.query(`select id, name, quantity,category, price, image, deskription from products where id = ?`, [id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results[0]);
    });
  },

  updateProduct: (data, callBack) => {
    pool.query(`update products set name=?, quantity=?,category=?, price=?, image=?, deskription=? where id = ?`, [data.name, data.quantity, data.category, data.price, data.image, data.deskription, data.id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }

      return callBack(null, results);
    });
  },

  deleteProduct: (id, callBack) => {
    pool.query(`delete from products where id = ?`, [id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
