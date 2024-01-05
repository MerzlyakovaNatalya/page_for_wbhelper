export interface IOptions {
    value: string
    title: string 
    arrow: string
}

export interface ISelect {
    value: string
    onSelect?: () => void
    arrow: string
    options: Array<IOptions>
  }
