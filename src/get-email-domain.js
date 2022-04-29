const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  for(let i = email.length - 1; i >= 0; i--){
    if(email[i] === '@'){
      return email.slice(-(email.length - 1 - i));
    }
  }
  return "It isn't email";
}

module.exports = {
  getEmailDomain
};
