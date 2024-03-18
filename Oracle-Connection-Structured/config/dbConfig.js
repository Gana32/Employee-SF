const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
module.exports = {
  connect: async function() {
    try {
      const connection= await oracledb.getConnection();
      console.log('Successfully Connected to database!!!');
      return connection;
    } catch (error) {
      console.error('Error getting database connection:', error);
      throw error;
    }
  }
};
