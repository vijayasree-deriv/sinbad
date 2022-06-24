import Loadable from '@loadable/component'

export const BenefitsList = Loadable(() => import('./benefits'))
export const Description = Loadable(() => import('./description'))
export const JobTitle = Loadable(() => import('./job-title'))
