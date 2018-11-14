/*
 * @Author: Edlan
 * @Date: 2018-11-08 10:47:37
 * @Description: AES是一种常用的对称加密算法，加解密都用同一个密钥
 */
const crypto = require('crypto') // crypto,Node自带的加密模块

module.exports = {
    // 加密
    aesEncrypt: (data, key = 'Password!') => {
        const cipher = crypto.createCipher('aes192', key);
        let crypted = cipher.update(data, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },
    // 解密
    aesDecrypt: (encrypted, key = 'Password!') => {
        const decipher = crypto.createDecipher('aes192', key);
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
};