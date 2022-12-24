const textarea = document.getElementById('input-text');
const buttonEncrypt = document.getElementById('button-1')
const buttonDecrypt = document.getElementById('button-2')
const buttonCopy = document.getElementById('button-3')

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function encryptOrDecrypt(operation){
  const prevContent = document.getElementById('input-text')
  const resultContent = document.getElementById('replaceable-text')
  resultContent.classList.add('align-rule')

  const encrypt = ['ai', 'enter', 'imes', 'ober', 'ufat']
  const decrypt = ['a', 'e', 'i', 'o', 'u']

  const encryptRules = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g]
  const decryptRules = [/a/g, /e/g, /i/g, /o/g, /u/g]

  if(!prevContent.value.length){
    alert('Debes introducir un texto para encriptar o desencriptar')
    return
  }

  buttonCopy.classList.add('show')

  if(operation === 'encrypt'){
    resultContent.innerHTML = `
      <p id='result-text' class='result-text'>
        ${prevContent.value
          .replace(decryptRules[1], encrypt[1])
          .replace(decryptRules[2], encrypt[2])
          .replace(decryptRules[0], encrypt[0])
          .replace(decryptRules[3], encrypt[3])
          .replace(decryptRules[4], encrypt[4])
        }
      </p>
    `
  }
  else{
    resultContent.innerHTML = `
      <p id='result-text' class='result-text'>
        ${prevContent.value
          .replace(encryptRules[0], decrypt[0])
          .replace(encryptRules[1], decrypt[1])
          .replace(encryptRules[2], decrypt[2])
          .replace(encryptRules[3], decrypt[3])
          .replace(encryptRules[4], decrypt[4])
        }
      </p>
    `
  }
}

function copy() {
  const content = document.getElementById('result-text');

  navigator.clipboard.writeText(content.innerText)
    .then(() => {
    alert('Texto copiado!')
  })
    .catch(err => {
    alert('Algo salió mal', err);
  })
}

textarea.addEventListener('keydown', autosize);
buttonEncrypt.addEventListener('click', () => encryptOrDecrypt('encrypt'))
buttonDecrypt.addEventListener('click', () => encryptOrDecrypt('decrypt'))
buttonCopy.addEventListener('click', copy)