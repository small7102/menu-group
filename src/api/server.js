// import axios from 'axios'

export function getGroupList () {
  // return axios({
  //   baseURL: '/api',
  //   url: '/groupList'
  // })
  return new Promise((resolve) => {
    let list = [
      {
        fid: 0,
        gid: 1,
        name: 'test 001'
      },
      {
        fid: 0,
        gid: 2,
        name: 'test 002'
      },
      {
        fid: 2,
        gid: 3,
        name: 'test 003'
      },
      {
        fid: 1,
        gid: 4,
        name: 'test 004'
      },
      {
        fid: 4,
        gid: 5,
        name: 'test 005'
      },
      {
        fid: 4,
        gid: 6,
        name: 'test 006'
      },
      {
        fid: 6,
        gid: 7,
        name: 'test 007'
      }
    ]

    resolve(list)
  })
}

export function getMembers () {
  return new Promise((resolve) => {
    let obj = {
      1: [
        {
          name: 'dghdgfhdgf',
          online: 1
        },
        {
          name: 'sdgshdgh',
          online: 0
        }
      ],
      2: [
        {
          name: 'ddhjjj',
          online: 1
        },
        {
          name: '223',
          online: 0
        }
      ],
      3: [
        {
          name: 'nihao',
          online: 1
        },
        {
          name: 'wohaodajiahao',
          online: 0
        }
      ],
      4: [
        {
          name: 'heloo',
          online: 1
        },
        {
          name: 'hcy23',
          online: 0
        }
      ]
    }

    resolve(obj)
  })
}
