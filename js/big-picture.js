const bigPicture = document.querySelector('.big-picture');
const popup = document.querySelector('body');

const showPicture = (photo) => {
  bigPicture.classList.remove('hidden');

  // Адрес изображения url подставляется как src изображения внутри блока .big-picture__img
  const bigPictureImgElement = document.querySelector('.big-picture__img').querySelector('img');
  bigPictureImgElement.src = photo.url;

  // Количество лайков likes подставляется как текстовое содержание элемента .likes-count
  const bigPictureLikesCount = document.querySelector('.likes-count');
  bigPictureLikesCount.textContent = photo.likes;

  // Количество комментариев comments подставляем как текстовое содержание элемента .comments-count
  const bigPictureCommentsCount = document.querySelector('.comments-count');
  bigPictureCommentsCount.textContent = photo.comments.length;

  // Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments
  const socialComments = document.querySelector('.social__comments');

  // Удаляем содержимое блока social__comments
  document.querySelectorAll('.social__comment').forEach((li) => li.remove());

  // Создаём фрагмент
  const commentsFragment = document.createDocumentFragment();

  const comments = photo.comments;

  comments.forEach((comment) => {
    const commentsElement = document.createElement('li');
    commentsElement.classList.add('social__comment');
    const socialPicture = document.createElement('img');
    socialPicture.src = comment.avatar;
    socialPicture.alt = comment.name;
    socialPicture.width = 35;
    socialPicture.height = 35;
    commentsElement.append(socialPicture);

    const socialText = document.createElement('p');
    socialText.classList.add('social__text');
    socialText.textContent=comment.message;
    commentsElement.append(socialText);
    commentsFragment.append(commentsElement);
  });

  socialComments.append(commentsFragment);

  // Описание фотографии description вставьте строкой в блок .social__caption
  const bigPictureDescription = document.querySelector('.social__caption');
  bigPictureDescription.textContent = photo.description;

  // Скрытие блока счётчика комментариев

  const socialCommentCount = document.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden');

  //Скрытие блока загрузки новых комментариев

  const socialCommentsLoader = document.querySelector('.comments-loader');
  socialCommentsLoader.classList.add('hidden');

  // После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями
  // позади не прокручивался при скролле.
  popup.classList.add('modal-open');

  const closePicture = () => {
    bigPicture.classList.add('hidden');

    // При закрытии окна не забудьте удалить этот класс.
    popup.classList.remove('modal-open');
  };

  // Код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

  const bigPictureCancel = document.querySelector('.big-picture__cancel');

  bigPictureCancel.addEventListener('click', () => {
    closePicture();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePicture();
    }
  });
};

export {showPicture};
