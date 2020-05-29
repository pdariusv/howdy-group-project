export const postData = [
  {
    _id: 1,
    title: 'The almost-reactor',
    name: 'Randy Esposito',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    comment: [
        {
            _id: 1,
            PostId: 1,
            username: 'user1',
            reply: 'this is a comment to the post',
            notification: ''
        },
        {
            id: 2,
            PostId: 1,
            username: 'user2',
            reply: 'another comment to the post',
            notification: ''
        },
        {
            id: 3,
            PostId: 2,
            username: 'user1',
            reply: 'yet another comment to the post',
            notification: ''
        }
        ],
    flag: true,
    date: 'Nov 16, 2019',
    votes: 0
  },
  {
    _id: 2,
    title: 'These are great resources for learning Vue.js',
    name: 'Scottie Wall',
    postText:
      'ya ya standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    comment: [],
    flag: 0,
    date: 'Nov 16, 2019',
    votes: 3
  },
  {
    _id: 3,
    title: 'How to understand a component lifecyle',
    name: 'Ann Zio',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    comment: [],
    flag: 0,
    date: 'Nov 15, 2019',
    votes: 5
  },
  {
    _id: 4,
    title: 'Email Confirmation with React',
    name: 'Lucy Tigier',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    comment: [],
    flag: 0,
    date: 'Nov 15, 2019',
    votes: 3
  },
  {
    _id: 5,
    title: 'Ten Rules for Negotiating a Job Offer',
    name: 'Coretta Harr',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    comment: [],
    flag: 0,
    date: 'Nov 14, 2019',
    votes: 7
  },
  {
    _id: 6,
    title: 'The 6 Best Podcast of 2019',
    name: 'Darlene Mund',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    comment: [],
    flag: 0,
    date: 'Nov 14, 2019',
    votes: 9
  },
  {
    _id: 7,
    title: 'Machining Learning is Fun',
    name: 'Carmen Taylor',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    comment: [],
    flag: 0,
    date: 'Nov 13, 2019',
    votes: 1
  },
  {
    _id: 8,
    title: 'Seeding MongoDB database the right away',
    name: 'Roxie Holly',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    comment: [],
    flag: 0,
    date: 'Nov 13, 2019',
    votes: 17
  },
  {
    _id: 9,
    title: 'JavaScript Strings in Detail',
    name: 'Jack Parnell',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    comment: [],
    flag: 0,
    date: 'Nov 12, 2019',
    votes: 9
  }
]
