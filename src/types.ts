// src/types.ts
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  subscribe?: string; // "on" if checked, undefined if not
}
