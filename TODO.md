# Task: Make admin corner data visible on hover without changing nav z-indexes

## Steps:
1. [x] Edit src/components/Navbar.jsx: Add z-[1000] to the relative group div containing the Admin Corner button to ensure it's above the second nav (z-40).
2. [x] Verify the change by testing hover functionality.
3. [x] Update TODO.md to mark completion.

## Plan Summary:
- Information Gathered: Admin corner dropdown uses group-hover but is blocked by second nav's z-40. Button in first nav (no z-index). Dropdown has z-[999].
- Dependent Files: None.
- Followup: Test hover; no installations needed.
