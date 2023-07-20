const data01 = "r01 active"

function route01(server) {
    server.get('/r01', (req, res, next) => {
      res.send({data01});
      return next();
    });
  }

  module.exports = route01;