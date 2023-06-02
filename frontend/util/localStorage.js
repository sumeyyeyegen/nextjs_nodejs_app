class storage {

  static set(key, cartItems) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, cartItems)
    }
  }

  static get(key) {
    if(typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem(key)) || []
    }else{
      return []
    }
  }
}

export default storage
