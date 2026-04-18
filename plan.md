# Plan: Update Contact Phone Numbers

We will update the contact information to include specific phone numbers for English and French speakers.

## 1. Update Mock Data
- Modify `src/data/mock-data.ts` to include a `CONTACT_INFO` constant.
- This will store the phone numbers:
    - English: `+251 91 326 4953`
    - French: `+254 704 352801`
- It will also store the emails and regional hubs to centralize contact data.

## 2. Update Contact Component
- Modify `src/components/Contact.tsx` to:
    - Import `CONTACT_INFO` from `@/data/mock-data`.
    - Replace the hardcoded phone number with the language-specific numbers from `CONTACT_INFO`.
    - Clearly label the numbers as "English Speaker" and "French Speaker".
    - Update the email and regional hubs sections to use data from `CONTACT_INFO` for consistency.
    - Ensure the styling remains consistent with the "Warm African" theme.

## 3. Verification
- Validate the build to ensure no TypeScript errors.
- Confirm the new phone numbers are displayed correctly in the Contact section.
