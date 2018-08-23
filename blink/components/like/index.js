// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,//Boolean默认值为false
      value:false,
      observer: function(){

      }
    },
    count: {
      type: Number  //Number默认值为0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // like:false,
    // count: 9,
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event){
      // console.log(event);
      let like = this.properties.like
      let count = this.properties.count

      count = like?count-1:count+1
      this.setData({
        count:count,
        like:!like
      })
    }

  }
})
