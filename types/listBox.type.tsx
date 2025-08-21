export interface OptionItem {
    id: number
    name: string
    value: string
}

export interface dropDownType<T extends OptionItem> {
    selected: T
    setSelected: React.Dispatch<React.SetStateAction<T>>
    options: T[]
}

