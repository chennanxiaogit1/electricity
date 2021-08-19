export default {
    // 1.添加商品的数量
    addCounter(state, payload) {
        payload.count++;
    },
    // 2.添加商品 
    addToCart(state, payload) {
        state.cartList.push(payload);
    }
}