import * as Mock from 'mockjs';

Mock.mock('http://api/data',
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
