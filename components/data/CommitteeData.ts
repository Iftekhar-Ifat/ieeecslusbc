type MemberDataType = {
  id: number
  name: string
  designation: string
  description?: string
  email?: string
  facebook?: string
  linkedIn?: string
}

type SessionDataType = {
  id: number
  type: string
  members: MemberDataType[]
}

type CommitteeDataType = {
  id: number
  session: string
  data: SessionDataType[]
}

export const CommitteeData: CommitteeDataType[] = [
  {
    id: 1,
    session: '2022-2023',
    data: [
      {
        id: 101,
        type: 'ex-com',
        members: [
          {
            id: 1001,
            name: 'Hira',
            designation: 'Chair',
            description: 'Chair of ieee',
            email: 'hira@gmail.com',
            facebook: 'https://www.facebook.com/mahdi.hira.53',
            linkedIn: 'https://www.facebook.com/mahdi.hira.53',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    session: '2021-2022',
    data: [
      {
        id: 102,
        type: 'advisors',
        members: [
          {
            id: 1001,
            name: 'SRK',
            designation: 'Advisor',
            description: 'Advisor of ieee',
            email: 'hira@gmail.com',
            facebook: 'https://www.facebook.com/mahdi.hira.53',
            linkedIn: 'https://www.facebook.com/mahdi.hira.53',
          },
        ],
      },
    ],
  },
]
