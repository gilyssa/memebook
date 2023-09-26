document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('image-container');
    const overlayContainer = document.getElementById('OverlayContainer');

    // Função para randomizar a ordem dos posts
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Função para carregar os dados do arquivo JSON
    async function loadPosts() {
        try {
            const response = await fetch('../../assets/scripts/posts.json');
            const postsData = await response.json();

            // Randomize a ordem dos posts
            shuffleArray(postsData.posts);

            postsData.posts.forEach((postData, index) => {
                const liElement = document.createElement('li');
                liElement.classList.add('post');
                liElement.setAttribute('data-index', index);

                const imgElement = document.createElement('img');
                imgElement.src = postData.postImageUrl;

                liElement.appendChild(imgElement);
                ulElement.appendChild(liElement);

                imgElement.addEventListener('click', () => {
                    const overlay = document.createElement('div');
                    overlay.classList.add('Overlay');
                    overlay.innerHTML = `
                                <div class="Overlay" id="overlay">
                                    <div class="PostOverlay">
                                        <img id="postImage" src="${postData.postImageUrl}" alt="Imagem do post">
                                        <div class="PostInfo">
                                            <button id="closeOverlay">x</button>
                                            <div class="PublisherInfo">
                                                <h1 id="userName">${postData.postAuthor}</h1>
                                                <p id='postDesc'>${postData.postDesc}</p>
                                            </div>
                                            <div>
                                                <h1 class="Comments">Comentários</h1>
                                                <ul class="CommentsList">
                                                    ${postData.postComments.map(commentObj => `
                                                        <li>
                                                            <a class="postCommenter">${commentObj.postCommenter}</a>: 
                                                            <a>${commentObj.postComment}</a>
                                                        </li>
                                                    `).join('')}
                                                </ul>
                                            </div>
                                            <div class="Likes">
                                                <div id="likeButtons">
                                                    <button id="HeartButton" data-liked="false">
                                                        <img id="emptyHeart" src="../assets/images/vitor/emptyheart.png" alt="Coração vazio">
                                                        <img id="fullHeart" src="../assets/images/vitor/fullheart.png" alt="Coração cheio" style="display: none;">
                                                    </button>
                                                    <p id="likesCount">${postData.postLikes} pessoas curtiram</p>
                                                </div>
                                            </div>
                                            <div class="CommentInput">
                                                <input type="text" placeholder="Comente...">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;


                    overlayContainer.innerHTML = '';
                    overlayContainer.appendChild(overlay);

                    const closeOverlayButton = overlay.querySelector('#closeOverlay');
                    closeOverlayButton.addEventListener('click', () => {
                        overlayContainer.innerHTML = '';
                    });

                    const heartButton = overlay.querySelector('#HeartButton');
                    const fullHeart = overlay.querySelector('#fullHeart');
                    const emptyHeart = overlay.querySelector('#emptyHeart');

                    heartButton.addEventListener('click', () => {
                        const liked = heartButton.getAttribute('data-liked') === 'true';

                        if (liked) {
                            fullHeart.style.display = 'none';
                            emptyHeart.style.display = 'inline';
                        } else {
                            fullHeart.style.display = 'inline';
                            emptyHeart.style.display = 'none';
                        }

                        heartButton.setAttribute('data-liked', (!liked).toString());
                    });
                });
            });

            postsContainer.appendChild(ulElement);
        } catch (error) {
            console.error('Erro ao carregar os posts:', error);
        }
    }

    const ulElement = document.createElement('ul');
    ulElement.classList.add('GridList');

    loadPosts();
});
