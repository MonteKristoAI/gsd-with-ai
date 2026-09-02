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

## Remote state (2026-09-02: main CLEANED, residual exposure remains ⚠️)

Clean history force-pushed to `origin/main` on 2026-09-02 (`ce5a05f`). Verified via
GitHub API: the `main` tree is 100 files with no `manji.x86`, `manji.x86.1`, `let`
or `statuses.json`. Branch `vercel/react-server-components-cve-vu-z9nshf` carried
`manji.x86` and was deleted. `qa-fix-pass-1` scanned across its full history, clean.

**Still outstanding:**
1. **The PAT was never rotated.** `ghp_thEm...` is still live and still sits in
   plain text in `.git/config`. This is the actual fix and only a human can do it.
2. **Orphaned commits are still reachable by SHA.** A force-push does not delete
   them. `f746030` still resolves on GitHub and its tree still serves the 13544-byte
   payload; closed PR #1 keeps `342bd9a` alive the same way. Only GitHub Support can
   purge unreachable objects. Making the repo private removes public access, which
   is the practical mitigation.
3. **Repo was still public as of 2026-09-02.** Setting it private was attempted and
   blocked by tooling permissions. Do it at
   github.com/MonteKristoAI/gsd-with-ai/settings.

Forensic evidence was NOT where this file claimed. `/home/milan/incident-evidence-2026-05-07/`
did not exist, so `origin/main` was the last surviving copy of the infected history.
It was bundled before the force-push to
`/home/milan/incident-evidence-2026-05-07/git-INFECTED-FULL-BACKUP/origin-main-infected-20260902.bundle`
(3.1MB, verified complete, contains all four malicious files). The deleted CVE branch
is an ancestor of that bundle, so it is captured too.

## To clean the remote (one-time, requires GitHub admin)

### Step 1: Rotate the GitHub PAT
The current PAT (`ghp_thEm...`) is in `.git/config` plain-text and was potentially
exfiltrated. Revoke at https://github.com/settings/tokens and generate a new one.

### Step 2: Update local git remote with new PAT
```bash
git remote set-url origin https://NEW_PAT@github.com/MonteKristoAI/gsd-with-ai.git
```

### Step 3: Force-push clean history to remote (DONE 2026-09-02)
```bash
git push origin main --force-with-lease   # f746030 -> ce5a05f
git push origin --delete vercel/react-server-components-cve-vu-z9nshf
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

_Updated 2026-09-02. Remote `main` is clean; PAT rotation and repo-private are the
two open items. Note the deploy path: production ships from this repo's `main` via
the Vercel git integration (project `gsd-with-ai`), so a push to `main` deploys._
