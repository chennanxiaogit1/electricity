export default {
    addCart(context, payload) {
        return new Promise((resolve, rejetc) => {
            //    1.查询是否有该商品 
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                context.commit("addCounter", oldProduct)
                resolve("商品数量+1");
            } else {
                payload.count = 1;
                payload.checked = true
                context.commit("addToCart", payload);
                resolve("添加了新商品")
            }
        })
    }
}