export const searchImages = searchText => ({
  type: 'SEARCH',
  data: searchImagesByText(searchText)
})

const searchImagesByText = searchText => {

  const searchTextParam = searchText ? `&q=${searchText}` : '';
  const imageAPIUrl = 'https://pixabay.com/api/?key=9490158-f36b61fb4883d54b1d21b156f';
  const params = 'fields=id,title,thumb,referral_destinations&sort_order=best' + searchTextParam;
  async function getImages(apiUrl) {
  	let response = await fetch(apiUrl);
  	return await response.json().data;
  }
  return getImages(imageAPIUrl + searchTextParam);
};

