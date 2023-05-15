const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
  } = process.env;
 let aurl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

  if (process.env.RUN_APP == "prod") {
    aurl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
  }
  
  module.exports = {
    url: aurl
  };