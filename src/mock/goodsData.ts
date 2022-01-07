import Mock from 'mockjs';

const Random = Mock.Random;

// 商品列表
const goodsList = Mock.mock({
  'data|1-10': [{
    'id|+1': 1,
    'name': Random.name(true),
    'image': 'https://img01.yzcdn.cn/vant/apple-1.jpg',
  }],
});

// 商品分类
const goodsCategory = Mock.mock({
  'data|1-10': [{
    'id|+1': 1,
    'name': Random.first(),
  }],
});

export default {
  goodsList,
  goodsCategory,
};
