const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(machine = true){
    this.machine = machine;
    this.arr_en = 'abcdefghijklmnopqrstuvwxyz';
  }

  encrypt(text = '', key = '') {
    let newStr = '';
    let j = 0;
    if(key === '' || text === '') throw new Error("Incorrect arguments!");

    if(key.length != text.length){
      if(key.length > text.length){
        text = text.slice(0, key.length);
      }else{
        key = key.repeat(Math.ceil(text.length / key.length));
        key = key.slice(0, text.length);
      }
    }

    for(let i = 0; i < text.length; i++){
      if(this.arr_en.indexOf(text[i].toLowerCase()) === -1){
        newStr += text[i];
      }else{
        let indexOfText = this.arr_en.indexOf(text[i].toLowerCase());
        console.log(`indexOfText: ${indexOfText}`);
        let indexOfKey = this.arr_en.indexOf(key[j].toLowerCase());
        console.log(`indexOfKey: ${indexOfKey}`);
        let indexSum = 0;
        indexSum = (indexOfText + indexOfKey) >= this.arr_en.length ? (indexOfText + indexOfKey) % 26 : (indexOfText + indexOfKey);
        console.log(`indexSum: ${indexSum}`);
        newStr += this.arr_en[indexSum];
        j++;
      }
    }

    if(this.machine){
      return newStr.toUpperCase();
    }else{
      return [...(newStr.toUpperCase())].reverse().join('');
    }
  }
  decrypt(text = '', key = '') {
    let newStr = '';
    let j = 0;
    if(key === '' || text === '') throw new Error("Incorrect arguments!");

    if(key.length != text.length){
      if(key.length > text.length){
        text = text.slice(0, key.length);
      }else{
        key = key.repeat(Math.ceil(text.length / key.length));
        key = key.slice(0, text.length);
      }
    }

    for(let i = 0; i < text.length; i++){
      if(this.arr_en.indexOf(text[i].toLowerCase()) === -1){
        newStr += text[i];
      }else{
        let indexOfText = this.arr_en.indexOf(text[i].toLowerCase());
        console.log(`indexOfText: ${indexOfText}`);
        let indexOfKey = this.arr_en.indexOf(key[j].toLowerCase());
        console.log(`indexOfKey: ${indexOfKey}`);
        let indexSum = 0;
        if(indexOfText - indexOfKey < 0){
          indexSum = ((this.arr_en.length) - Math.abs(indexOfText - indexOfKey));
        }else{
          indexSum = indexOfText - indexOfKey;
        }
        console.log(`indexSum: ${indexSum}`);
        
        newStr += this.arr_en[indexSum];
        j++;
      }
    }

    if(this.machine){
      return newStr.toUpperCase();
    }else{
      return [...(newStr.toUpperCase())].reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
