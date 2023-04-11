let likeIcons = document.querySelectorAll('.like-rating__like-icon');
let likeValues = document.querySelectorAll('.like-rating__value');

for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener('click', function () {
      if (likeIcons[i].classList.contains('like-rating__button--not-click')) {
        likeIcons[i].classList.remove('like-rating__button--not-click');
        likeIcons[i].classList.add('like-rating__button--click');
        likeValues[i].innerHTML = Number(likeValues[i].innerHTML) + 1;
      } else {
        likeIcons[i].classList.add('like-rating__button--not-click');
        likeIcons[i].classList.remove('like-rating__button--click');
        likeValues[i].innerHTML = Number(likeValues[i].innerHTML) - 1;
      }
    })
  }
