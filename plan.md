# Replace "SACCOs" with "cooperatives" Plan

## 1. Goal
Replace all instances of the word "SACCO" and "SACCOs" with "cooperative" and "cooperatives" respectively across the landing page and data files to align with the new terminology.

## 2. Targeted Files
- `src/data/mock-data.ts`: Update all text content containing "SACCO" or "SACCOs".
- `src/components/Hero.tsx`: Replace "SACCOs" in the descriptive paragraph.
- `src/components/RegistrationForm.tsx`: Replace "SACCO" in the heading and input labels.
- `src/components/About.tsx`: Replace "SACCOs" in the platform description.
- `src/components/GlobalReach.tsx`: Replace "SACCOs" in the accessibility section.
- `src/components/Footer.tsx`: Replace "SACCOs" in the company mission statement.

## 3. Implementation Details
- Maintain casing (e.g., "SACCOs" -> "cooperatives", "SACCO" -> "cooperative").
- Ensure grammatical correctness after replacement.
- Preserve all existing styling, layout, and functionality.

## 4. Verification
- Validate the build to ensure no syntax errors were introduced.
- Review the landing page to confirm all instances have been updated.
