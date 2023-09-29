var imageState = 1; // Estado inicial (1 para imagem1, 2 para imagem2)

        function toggleImage(imageId) {
            var imgElement = document.getElementById(imageId);

            if (imageState === 1) {
                imgElement.src = '../assets/images/yuri/pagInicial/coraçãoVazio.png';
                imageState = 2;
            } else {
                imgElement.src = '../assets/images/yuri/pagInicial/coracaoCheio.png';
                imageState = 1;
            }
        }