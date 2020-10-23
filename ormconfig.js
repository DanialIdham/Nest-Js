const database = {
  development: "Xendit",
  production: 'XenditProd',
}
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'DanielPC',
  database: "Xendit",
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true
};