# Trial log — news-image-20261124 (REBUILD)

- Slug: news-image-20261124
- Title: Sum up 24 November's world news in one image
- Prize pool: $100 (1st $20, 2nd $12, 3rd $6, 4th–10th $2, 11th–50th $1.20). Free entry.
- Deadline: 26 Nov 2026 08:00 WITA
- Kit limits (RULES.txt, verified in kit): PNG or JPEG, at most 1 MiB (1,048,576 bytes),
  at most 1024x1024 px. Program: Node 22 main.ts or Python 3.13 main.py at repo root,
  stdlib only, no network, 1 CPU, 512 MB, 60 s. Both runs must write identical bytes.
  Judge: z-ai/glm-5.3-flash, pairwise, criteria in order: names the day, selection and
  breadth, reads, faithful, craft (legible at ~300 px).
- Kit verification: live API bundle_sha256 4b5efc94df5f7f13825c507da56ccbb2c28bfefaa6d9e78930db672cc4b17c10
  matches kit.json bundle_sha256 in the local kit. Kit already on disk, re-verified 24 Nov 2026 ~08:00 WITA.
- Approach: follows the 21 Nov (PLACED) and 22 Nov entries — newspaper front page,
  6 photo panels, masthead names the day; main.ts copies the bundled image verbatim
  (the kit's own starter does the same; RULES: "the simplest entry is a repository
  holding the image and a one-line program that copies it there").

## Why this is a rebuild

- An earlier build was made BEFORE the competition opened (23 Nov ~22:48Z). Its check
  failed 3 ways: `competition_open`, `thinking_in_window` (262 timestamps before opening),
  `thinking_revised`. Its repo was also created before opening, so `repo_created_after_open`
  would fail at submit too. NOTHING from that build's session, repo, or commits was reused
  as-is: old repo dir wiped, old entry.png deleted, old git history discarded.
- Old image: 1024x1024 JPEG 366,766 B, sha256 5186f399a2dad6940e704f7a5f61201305132aa08f26a5c0a238514f158d716e.
  New image below is a fresh generation in THIS session with a different sha256.
- Old repo: GitHub rwnliwan/news-image-20261124, created 2026-11-23T22:53:27Z, HEAD
  49f7c866bfe99edddf84660d9f7a7d529f5873f0. Deleted and recreated after the opening;
  fresh `git init -b main`, all files authored in this session.
- Old trial log was read ONLY as a source of the 6 verified story facts. This log is
  written fresh in this session.

## Stories (each re-verified by web search on 24 Nov 2026, ~08:00 WITA)

1. AFCON title decided today — CAS verdict due Tue afternoon, Lausanne, on Senegal's
   appeal (Senegal won Jan final 1-0; CAF awarded title to Morocco in March).
   VERDICT STATUS AT BUILD TIME: still pending. Official CAS announcement due Tue
   afternoon GMT (Reuters, SuperSport, CAS statement 23 Nov). Marca reported 23 Nov
   that the panel will uphold Morocco, but CAS has NOT confirmed it and warned only
   its own channels count, so the image keeps the story as pending ("CAS TO RULE
   TODAY ON AFCON TITLE"). Reporting the Marca leak as fact would be unfaithful.
2. Gukesh vs Sindarov Game 1, Geneva — youngest World Chess Championship match ever,
   both 20, $2.5m fund. Sindarov has White in Game 1, 15:00 CET. Sources: FIDE / Chess.com / ChessBase 23 Nov.
3. Huang back at Nvidia — reinstated Mon 23 Nov; shares +31% Mon, Nasdaq +6.5%.
   Sources: Reuters, CNN 23 Nov.
4. Indonesia candy factory fire — 24 dead confirmed Mon 23 Nov, ~30 missing, search
   goes on. Sources: Reuters 23 Nov, BusinessWorld.
5. Moscow warns Estonia — border closure from 1 Dec "on the verge of triggering open
   war". Source: Reuters 23 Nov.
6. Gaza toxic wasteland — Oxfam/CEOBS report: contamination indicators across >99%
   of the Strip. Sources: Oxfam, ReliefWeb, CNN 23 Nov.

## Trials

| version | file | bytes | dims | sha256 (run 1) | sha256 (run 2) | identical | notes |
|---|---|---|---|---|---|---|---|
| v1 | entry.png (JPEG q90, from 1600x1600 media gen in this session) | 369787 | 1024x1024 | _pending preflight_ | _pending preflight_ | _pending_ | Visual check: all 6 headlines spelled correctly, masthead date correct. First generation drew Egypt's flag instead of Morocco's in the lead photo; fixed with a targeted edit in this session (Morocco flag now correct, red with green pentagram). Gaza panel split into a main photo plus a small Oxfam report inset, harmless extra detail. |

## Submission

- NOT submitted by this builder (coordinator submits). No `makefun check` / `submit` run here.
- No claim codes written anywhere. No Drive backup.
