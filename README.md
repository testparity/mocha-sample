<p align="center">
  <img src="https://testparity.com/brand/testparity-readme-banner.jpg" alt="TestParity" width="100%">
</p>

# Mocha Sample

[![Parity Sample](https://github.com/testparity/mocha-sample/actions/workflows/parity.yml/badge.svg)](https://github.com/testparity/mocha-sample/actions/workflows/parity.yml)

This repository is an end-to-end Parity demo for Mocha and NYC. CI runs the real suite, then `parity test` runs each belonging test file in isolation and builds fresh per-test coverage evidence.

## What this sample proves

No coverage result is committed. NYC emits one Clover report per isolated Mocha test file, and Parity normalizes those reports into `.parity/per-test` before checking them.

| Source file | Matching test | All-test file coverage | Matching-test coverage | Other covering tests | Why it matters |
| --- | --- | ---: | ---: | ---: | --- |
| `code/src/greeting.js` | `code/tests/greeting.spec.js` | 85.71% | 42.86% | 1 | Global coverage hides that another test covers half of the exercised operations. |
| `code/src/discount.js` | `code/tests/discount.spec.js` | 100% | 100% | 0 | The matching test owns this file's coverage. |
| Project total | - | 88.89% | - | - | Global coverage is healthy while one file still needs better direct tests. |

Parity enforces these thresholds in `parity.yaml`:

- `min_coverage_global: 80` keeps the aggregate project gate.
- `minimum-coverage: 70` keeps every source file above the ordinary coverage floor.
- `matched-coverage: 40` requires the belonging test to cover a meaningful portion itself.
- `coverage-attribution` reports `2|1` for `greeting.js`: two covering tests, one of them non-matching.

## Run locally

Install the locked sample dependencies and the public Parity package:

```bash
cd code
npm ci
cd ..
composer global require "testparity/parity:^1.2"
```

Run the native suite, then generate and check fresh per-test evidence:

```bash
cd code && npm test && cd ..
parity test --config=parity.yaml --format=json --show-tests
```

Expected highlights from the JSON output:

- `greeting.js`: `minimum-coverage = 85.71%`, `matched-coverage = 42.86%`, `coverage-attribution = 2|1`.
- `discount.js`: `minimum-coverage = 100%`, `matched-coverage = 100%`, `coverage-attribution = 1|0`.
- `global_coverage = 88.89` and `passed = true`.

## CI

GitHub Actions runs the full Mocha suite, rejects the old fixture path, clears generated evidence, and then runs:

```bash
parity test --config=parity.yaml --format=json --show-tests
```

The workflow uploads `.parity/per-test` and `parity-result.json` so every green run has inspectable proof. No private token is required.
