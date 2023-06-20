export interface Character {
  id: string
  name: string
  image: string
  status: string,
  gender: string
}

export interface InfoData {
  count: number
  page: number
  next: number
  prev: null
}

export interface CharacterResult {
  characters: {
    info: InfoData
    results: Character[]
  }
}