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
