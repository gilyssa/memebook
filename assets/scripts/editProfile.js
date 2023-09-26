function showImage() {
  const fileInput = document.getElementById('fileInput');
  const imageContainer = document.getElementById('imageContainer');
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.createElement('img');
      imgElement.src = e.target.result;
      imgElement.classList.add('uploaded-image');
      imageContainer.innerHTML = '';
      imageContainer.appendChild(imgElement);
    };

    reader.readAsDataURL(selectedFile);
  }
}

function removeImage() {
  const imageContainer = document.getElementById('imageContainer');
  const imgElement = imageContainer.querySelector('img');
  if (imgElement) {
    imageContainer.removeChild(imgElement);
  }
}

function submitData() {
  let email = document.querySelector('.email').value;
  let username = document.querySelector('.username').value;
  let password = document.querySelector('.password').value;

  if(isImageSelected() && completedFields()){
    alert('Perfil editado com sucesso.')
  }else if(!hasEigthSize(username) && !hasEigthSize(password)){
    alert('Os campos username e password precisam ter no mínimo 8 caracteres.')
  }else if(!isEmail(email)){
    alert('Insira um email válido!')
  }else{
    alert('Preencha todos os campos.')
  }
}

function isImageSelected() {
  const fileInput = document.getElementById('fileInput');
  const selectedFile = fileInput.files[0];
  return selectedFile !== undefined && selectedFile.type.startsWith('image/');
}

function completedFields(){
  return document.querySelector('.email').value != '' 
  && document.querySelector('.username').value != ''
  && document.querySelector('.password').value != ''
  && document.querySelector('.description').value != ''
}

function hasEigthSize(value) {
  return value.length >= 8;
}

function isEmail(value) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(value);
}
