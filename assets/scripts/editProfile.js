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
  const profile = document.querySelector('#imageContainer').value;
  console.log(profile);
}