module.exports = {
  port: 3000,
  //过期时间，秒
  expireTime: 24 * 3600,
  appid: 'wx3f056782366dc611',
  secret: '048cfd6d8ea2db639f5d93e7664abd3c',
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'urology',
    pass: '123456',
    char: 'utf8mb4'
  },
  //文件云存储
  cos: {
    region: 'ap-guangzhou',
    fileBucket: 'todo'
  }
};