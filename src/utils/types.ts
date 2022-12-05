export interface Client {
  id: number
  name: string
  telephone: string
  amount: number
  items: string
  status: string
}

export interface ClientProp {
  item: Client
}

export type NavigationType = {
  navigate: (route: string, params?: {}) => void
  goBack: () => void
  dispatch: (navigation: void) => void
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
