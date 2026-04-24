/**
 * Simple className join; avoids extra dependencies.
 */
export function cx(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
