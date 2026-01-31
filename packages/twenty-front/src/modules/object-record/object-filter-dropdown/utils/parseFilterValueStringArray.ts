import { isNonEmptyString } from '@sniptt/guards';

export const parseFilterValueStringArray = (
  value: string | null | undefined,
): string[] => {
  if (!isNonEmptyString(value)) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(value);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter(
      (item): item is string => typeof item === 'string',
    );
  } catch {
    return [];
  }
};
