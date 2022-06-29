import Positions from 'data/positions.json'

type PositionsType = {
    id?: string
    role_plural?: string
    role?: string
    text?: string
    description?: string[]
    challenges?: string[]
    team?: string
    requirements?: string[]
    good_to_have?: string[]
    alt?: string
    seo_title?: string
    seo_description?: string
    join_alt?: string
}

export type JobTitleProps = {
    position: PositionsType
}

export const positions: PositionsType[] = Positions
