const INITIAL_STATE = {
    sections: [
    {
      title: 'climbing',
      imageUrl: 'https://images.unsplash.com/photo-1583623010148-9c00f6b12efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      size: 'small',
      id: 1,
      linkUrl: 'shop/hats',
      //  https://images.unsplash.com/photo-1601025678763-e8f5835995db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80
      //  https://images.unsplash.com/photo-1583623010148-9c00f6b12efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80
      //  https://i.ibb.co/cvpntL1/hats.png
    },
    {
      // title: 'jackets',
      // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      title: 'jackets',
      imageUrl: 'https://images.unsplash.com/photo-1594639440713-171c55701c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80',
      size: "medium",
      id: 2,
      linkUrl: 'shop/jackets',
      
      
    },
    {
      // title: 'sneakers',
      // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      title: 'boots',
      imageUrl: 'https://images.unsplash.com/photo-1528641638513-63e382072b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
      size: 'small',
      id: 3,
      linkUrl: 'shop/sneakers',
      
    },
    {
      // title: 'women\'s',
      // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      title: 'gear',
      imageUrl: 'https://images.unsplash.com/photo-1535530124635-c5487dfad499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
      //  https://images.unsplash.com/photo-1493244040629-496f6d136cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2232&q=80
      //  https://images.unsplash.com/photo-1535530124635-c5487dfad499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80
      //  https://images.unsplash.com/photo-1485809052957-5113b0ff51af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80
      //   https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80
    },
    {
      title: 'tents',
      //  title: 'men\s',
      imageUrl: 'https://images.unsplash.com/photo-1598507776352-1cb620d8aa92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
      // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
      
    }
]};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;