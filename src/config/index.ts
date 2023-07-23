const getEnvVariable = <T>(key: string, defaultValue?: T): string =>
  (process.env[key] as string) || (defaultValue?.toString() as string);

export const config: Record<string, string> = {
    usersApiUrl: getEnvVariable('REACT_APP_USERS_API', '')
}