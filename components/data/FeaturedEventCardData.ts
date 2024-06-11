import activity_img from '@/public/assets/DASPiB.jpg'
import activity_img1 from '@/public/assets/BYLC.jpg'
import activity_img2 from '@/public/assets/Event_1.jpg'
import activity_img3 from '@/public/assets/IEEE Election.jpg'
import activity_img4 from '@/public/assets/Fund.jpg'
import activity_img5 from '@/public/assets/agm.jpg'
import { StaticImageData } from 'next/image'

type EventCardDataType = {
  id: number
  title: string
  subtitle: string
  image_url: StaticImageData
}

type FeaturedEventCardDataType = {
  id: number
  type: string
  card_data: EventCardDataType[]
}

export const featuredEventCardData: FeaturedEventCardDataType[] = [
  {
    id: 1,
    type: 'Training',
    card_data: [
      {
        id: 1,
        title: 'Developing Advanced Security Professionals in Bangladesh',
        subtitle:
          'Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.',
        image_url: activity_img,
      },
      {
        id: 2,
        title: 'Unlocking Potential A Journey into 21st Century Skills',
        subtitle:
          'Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.',
        image_url: activity_img1,
      },
      {
        id: 3,
        title: 'Importance of Software Testing in Software Development',
        subtitle:
          'Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.',
        image_url: activity_img2,
      },
    ],
  },
  {
    id: 2,
    type: 'Others',
    card_data: [
      {
        id: 1,
        title: 'IEEE CS LU SB Chapter Election & Commitee Announcement 2023',
        subtitle:
          'Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.',
        image_url: activity_img3,
      },
      {
        id: 2,
        title: 'Fundraiser for Ramadan & Eid Rejoice',
        subtitle:
          'Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.',
        image_url: activity_img4,
      },
      {
        id: 3,
        title: 'AGM & Award Night',
        subtitle:
          'Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.',
        image_url: activity_img5,
      },
    ],
  },
]
