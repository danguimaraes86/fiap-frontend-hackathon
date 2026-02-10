export interface UserPreferences {
  id: string | null
  userId: string | null

  theme: ThemeType
  focusMode: boolean

  showCompletedTasks: boolean
  showPendingTasks: boolean
}

export const THEMES = {
  LIGHT: {
    value: 'light',
    label: 'Claro'
  },
  DARK: {
    value: 'dark',
    label: 'Escuro'
  },
} as const
export type ThemeType = typeof THEMES[keyof typeof THEMES]['value']

export const DEFAULT_USER_PREFERENCES: Omit<UserPreferences, 'id' | 'userId'> = {
  theme: 'light',
  focusMode: false,

  showCompletedTasks: true,
  showPendingTasks: true,
}