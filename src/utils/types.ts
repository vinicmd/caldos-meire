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
  navigate: (route: string, params?: {}) => void
}

type Route = {
  key?: string
  name?: string
  params?: { id?: string | number }
  path?: string
}

export interface RouteProp {
  route: Route
}
