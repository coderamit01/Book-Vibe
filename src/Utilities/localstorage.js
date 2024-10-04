
// Get Wishlist Data From Localstorage 
const getWishlistData = () => {
  const data = localStorage.getItem('wishlist');
  if(data){
    return JSON.parse(data);
  }
  return [];
}

// Add Read to wishlist  
const addWishlistToLS = (id) => {
  const savedData = getWishlistData();
  const exists = savedData.find(itemId => itemId === id);
  if(!exists){
    savedData.push(id);
    localStorage.setItem('wishlist',JSON.stringify(savedData));
    return false;
  }
  return true;
}
// Get Read Data From Localstorage 
const getReadData = () => {
  const data = localStorage.getItem('read');
  if(data){
    return JSON.parse(data);
  }
  return [];
}
// Add Read to LocalStorage 
const addReadToLS = (id) => {
  const savedData = getReadData();
  const exists = savedData.find(itemId => itemId === id);
  if(!exists){
    savedData.push(id);
    localStorage.setItem('read',JSON.stringify(savedData));
    return false;
  }
  return true;
}


export {getWishlistData, addWishlistToLS, getReadData, addReadToLS};