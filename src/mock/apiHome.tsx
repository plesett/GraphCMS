import * as Mock from 'mockjs';

Mock.mock('https://api/data',
    {
        success: '请求成功',
        data: [
            {
                id: 1,
                title: "今天"
            },
            {
                id: 2,
                title: "明天"
            },
            {
                id: 3,
                title: "昨天"
            }
        ]
    }
)

Mock.mock('https://api/title',
    {
        success: '请求成功',
        data: [
            {
                id: 1,
                title: "标题1"
            },
            {
                id: 2,
                title: "标题2"
            },
            {
                id: 3,
                title: "标题3"
            }
        ]
    }
)

Mock.mock('https://api/info',
    {
        success: '请求成功',
        data: [
            {
                id: 1,
                title: "info1"
            },
            {
                id: 2,
                title: "info12"
            },
            {
                id: 3,
                title: "info13"
            }
        ]
    }
)