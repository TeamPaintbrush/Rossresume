# Status flow

| Status       | Meaning                                                        | Typical next |
|--------------|---------------------------------------------------------------|--------------|
| `identified` | Role found and logged, no decision yet                         | `drafting`, `on-hold`, `withdrawn` |
| `drafting`   | Decided to apply; tailoring resume + writing cover letter      | `applied`, `withdrawn` |
| `applied`    | Application submitted                                          | `screen`, `rejected` |
| `screen`     | Recruiter / phone screen scheduled or done                     | `interview`, `rejected`, `withdrawn` |
| `interview`  | In the interview loop (any round)                              | `offer`, `rejected`, `withdrawn` |
| `offer`      | Offer extended                                                 | (accept / decline — record in `notes.md`) |
| `rejected`   | Company passed                                                 | — |
| `withdrawn`  | Leroy pulled out                                               | — |
| `on-hold`    | Parked — not now, maybe later                                  | `drafting`, `withdrawn` |

Transitions are advisory, not enforced. The CLI warns on an unknown status but
won't block it.

Every status change appends an entry to `job.json` `history[]` with the date and a
one-line note, and updates `dates.lastActivity`.
