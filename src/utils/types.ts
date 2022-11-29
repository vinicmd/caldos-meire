export interface Client {
  id: number
  name: String
  telephone: String
  amount: number
  items: String
}

export interface ClientProp {
  item: Client
}

export type NavigationType = {
  navigate: (route: string) => void
}
