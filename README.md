# Metro Team – Agent Register

Files to upload to the repo: `index.html`, `data.json`, `logo.png`, `favicon.png`.

## Logins
- **Agent:** pick your name, password **m45** by default. The admin can set a personal password for each agent (Admin > Passwords tab). After login the page says "Welcome, <agent name>" and shows only that agent's calls and attendance.
- **Admin:** password **dom26**. Only the admin can mark attendance, enter calls, set passwords and export to Excel.

## Set up (about 10 minutes)
1. Create a GitHub account with the username **metro**. (The link https://metro.github.io/teammetro only works with that exact username and a repo called **teammetro**.)
2. Create a new empty repo named **teammetro**.
3. Click **uploading an existing file**, drag in the 4 files, then **Commit changes**.
4. Repo **Settings > Pages**: Source = *Deploy from a branch*, Branch = **main**, folder **/(root)**, Save. After about a minute the site is live at https://metro.github.io/teammetro
5. Make a token so your edits can save online: GitHub **Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate new token**.
   - Repository access: *Only select repositories* > teammetro
   - Permissions: *Contents* = **Read and write**
   - Copy the token (shown once).
6. Open the site, log in as **Admin** (dom26). The first time you change something, a box asks for the token. Paste it once. It stays on that device, and every change after that saves online by itself ("Saved online ✓").

## If `metro` is taken
Use another username and change `OWNER` at the top of the script in `index.html`. The link becomes https://YOURNAME.github.io/teammetro

## Good to know
- Logins are a front door, not bank-grade security: the repo's data file is readable by anyone who finds the repo, and passwords are stored only as hashes. Don't keep sensitive information in it. Keep your token private.
- Sep 2026 is locked (totals only). Oct has your marked attendance and daily calls. Nov and Dec are blank.
- Export Excel builds the selected month in the same layout as your register, with live formulas (COUNTIF, SUM, attendance %).
