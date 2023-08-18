interface NewsTypeI {
  value: string,
  xmlId: string
}

export interface NewsItemI {
  name: string,
  code: string,
  previewText: string,
  type: NewsTypeI,
  link: string,
  date: number,
  image: string
}

export interface NavI {
  current: number,
  total: number
}

export interface NewsListI {
  items: NewsItemI[],
  nav: NavI
}
