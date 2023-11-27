export enum ProfileEnum {
  person = 'person',
  team = 'team',
}

export const PERSON_CONFIG = {
  name: 'Laima',
  job: 'Direktore',
  vipLvl: 'Auksinis',
  place: '115',
  points: '12350',
  countries: [
    {
      name: 'Turkija',
      points: '85',
    },
    {
      name: 'Graikija',
      points: '64',
    },
    {
      name: 'Egiptas',
      points: '56',
    },
  ],
  nights: [
    {
      name: '7 naktys',
      points: '112',
    },
    {
      name: '9 naktys',
      points: '96',
    },
    {
      name: '6 naktys',
      points: '80',
    },
  ]
}

export const TEAM_CONFIG = {
  name: 'Kelioniu Ekspresas',
  place: '1',
  points: '43400',
  countries: [
    {
      name: 'Turkija',
      points: '185',
    },
    {
      name: 'Graikija',
      points: '164',
    },
    {
      name: 'Egiptas',
      points: '156',
    },
  ],
  nights: [
    {
      name: '7 naktys',
      points: '212',
    },
    {
      name: '9 naktys',
      points: '196',
    },
    {
      name: '6 naktys',
      points: '180',
    },
  ]
}

export const achievments = [
  {
    title: '100 kelioniu per menesi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.',
    image: 'https://picsum.photos/200/200',
    disabled: false,
  },
  {
    title: '100 kelioniu per savaite',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.',
    image: 'https://picsum.photos/200/200',
    disabled: false,
  },
  {
    title: '100 kelioniu per diena',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.',
    image: 'https://picsum.photos/200/200',
    disabled: true,
  },
  {
    title: 'Pasiekti bronzini lygi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.',
    image: 'https://picsum.photos/200/200',
    disabled: true,
  },
  {
    title: 'Pasiekti sidabrini lygi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.',
    image: 'https://picsum.photos/200/200',
    disabled: true,
  },
  {
    title: 'Pasiekti auksini lygi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.',
    image: 'https://picsum.photos/200/200',
    disabled: true,
  },
]
