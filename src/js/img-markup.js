export function getImageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <div class="photo-card">
  <a class="gallery__item" href="${largeImageURL}" data-caption="Likes ${likes} | Views ${views} | Comments ${comments} | Downloads ${downloads}">
  <img class="gallery__image" src="${webformatURL}" alt=" ${tags}  &bull; Likes : ${likes}  &bull; Views : ${views}  &bull; Comments : ${comments}  &bull; Downloads : ${downloads}" loading="lazy" />
</a>
    
    <div class="info">
      <p class="info-item">
        <b>Likes ${likes} </b>
      </p>
      <p class="info-item">
        <b>Views ${views}</b>
      </p>
      <p class="info-item">
        <b>Comments ${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads ${downloads} </b>
      </p>
    </div>
  </div>`;
}