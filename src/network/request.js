export function request(params) {
    wx.showToast({
        title: '加载中',
        icon: 'none',
    });
      
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url:`http://152.136.185.210:7878/api/m5${params.url}`,
            success: (res) => {
                resolve(res.data)
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => {
                wx.hideToast();
            }
        });

    })
}