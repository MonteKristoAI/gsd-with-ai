# 🛡️ Security Status — getstuffdone/website

## What happened (2026-05-07)

This project's GitHub repository (`MonteKristoAI/gsd-with-ai`) was compromised via
malicious commits by the AI bot account `ai@montekristodevs.com` on 2026-04-28.
Three malicious files (`manji.x86`, `manji.x86.1`, `let`) were committed alongside
legitimate layout/architecture changes.

The malware ran for 9 days, deploying XMRig cryptominer + Mirai botnet via watchdog
processes. Server was cleaned 2026-05-07 evening.

## Local state (CLEAN ✅)

The local git history has been purged of all malicious commits via `git filter-branch`:
- `manji.x86`, `manji.x86.1`, `let`, `statuses.json`, `iran.*` removed from all 45 commits
- Orphan git objects pruned via `git gc --aggressive`
- Pre-commit hook installed: blocks future malicious filenames
- Post-checkout hook installed: auto-cleans if checkout restores them
- `.gitignore` updated to prevent reintroduction

## Remote state (STILL INFECTED ⚠️)

`git@github.com:MonteKristoAI/gsd-with-ai.git` STILL has the malicious commits in
its history. **DO NOT `git pull` or `git fetch && git checkout origin/main`** —
that would bring them back.

## To clean the remote (one-time, requires GitHub admin)

### Step 1: Rotate the GitHub PAT
The current PAT (`ghp_thEm...`) is in `.git/config` plain-text and was potentially
exfiltrated. Revoke at https://github.com/settings/tokens and generate a new one.

### Step 2: Update local git remote with new PAT
```bash
git remote set-url origin https://NEW_PAT@github.com/MonteKristoAI/gsd-with-ai.git
```

### Step 3: Force-push clean history to remote
```bash
git push origin main --force-with-lease
git push origin --tags --force
```

### Step 4: Verify GitHub web UI shows clean history
- Open the repo on GitHub
- Search for `manji.x86` in code → should return nothing
- Check commit history → should not have `30daae9` or `37f2d73`

### Step 5: Investigate the AI bot account compromise
- GitHub org `MonteKristoAI` → Security → Audit log
- Find when `ai@montekristodevs.com` made the malicious commits
- See what IP / device / app
- Revoke any active sessions for that account
- If Lovable.dev or similar AI service has access — investigate there too

## Local working tree usage

After local cleanup, you CAN now:
- ✅ Read source code
- ✅ Edit source code
- ✅ Run `npm install --ignore-scripts` (with `~/.npmrc ignore-scripts=true`)
- ✅ Run `next dev` / `next start` (will be blocked by pre-commit if you commit malware)
- ✅ Make new commits (pre-commit hook blocks malware)

DO NOT:
- ❌ `git pull` until remote is cleaned (Step 1-4 above)
- ❌ `git fetch && git checkout origin/main`
- ❌ `git reset --hard origin/main`

## Forensic evidence

Original infected repo backed up: `/home/milan/incident-evidence-2026-05-07/git-INFECTED-FULL-BACKUP/`
Original malware binaries: `/home/milan/incident-evidence-2026-05-07/manji-binaries/`
Full incident report: `~/Documents/MonteKristo Vault/intelligence/incidents/2026-05-07-server-compromise.md`

---

_Updated 2026-05-07 after git history cleanup. Safe to use locally pending remote cleanup._
