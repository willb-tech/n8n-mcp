window.BENCHMARK_DATA = {
  "lastUpdate": 1772283613923,
  "repoUrl": "https://github.com/willb-tech/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5aebc14504ecb60a8f9dbfc36f5e6e33d0b8e95",
          "message": "Merge pull request #212 from czlonkowski/fix/multi-tenant-header-extraction\n\nFix: Multi-tenant support with dynamic tool registration",
          "timestamp": "2025-09-20T08:51:09+02:00",
          "tree_id": "d5e52298a531a73e100b6933ff4944d24245611a",
          "url": "https://github.com/willb-tech/n8n-mcp/commit/c5aebc14504ecb60a8f9dbfc36f5e6e33d0b8e95"
        },
        "date": 1758381731808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.2902",
            "unit": "ms",
            "extra": "52255 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.2396,
            "range": "2.5336",
            "unit": "ms",
            "extra": "309 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.256",
            "unit": "ms",
            "extra": "213079 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0664,
            "range": "0.4194",
            "unit": "ms",
            "extra": "15061 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4854a50854003072814c59828720b6d646292e10",
          "message": "Merge pull request #244 from czlonkowski/feature/webhook-error-execution-guidance\n\nfeat: enhance webhook error messages with execution guidance",
          "timestamp": "2025-10-01T12:08:49+02:00",
          "tree_id": "6b499b925c568797822462bd7941a791b38b8f18",
          "url": "https://github.com/willb-tech/n8n-mcp/commit/4854a50854003072814c59828720b6d646292e10"
        },
        "date": 1759390899302,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.3084",
            "unit": "ms",
            "extra": "52339 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1761,
            "range": "0.5627999999999997",
            "unit": "ms",
            "extra": "315 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.2783",
            "unit": "ms",
            "extra": "215268 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0662,
            "range": "0.28890000000000005",
            "unit": "ms",
            "extra": "15100 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liz041218888@gmail.com",
            "name": "Liz",
            "username": "Lizevolving"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18b8747005effbff0bba122acf8b0191297252e9",
          "message": "Update CLAUDE_CODE_SETUP.md (#276)\n\n* Update CLAUDE_CODE_SETUP.md\n\ndocs: Improve CLI setup for PowerShell and scope management\r\n\r\nThis commit introduces two improvements to the CLAUDE_CODE_SETUP.md documentation to enhance user experience, particularly for Windows users and those managing configuration scopes.\r\n\r\n1.  Add PowerShell-Compatible Commands:\r\n    The original `claude mcp add` commands use a syntax that fails in native Windows PowerShell due to its parameter parsing. This change adds dedicated code blocks for PowerShell, which correctly wrap the `-e` arguments in single quotes.\r\n\r\n2.  Clarify Configuration Scope Management:\r\n    The documentation previously lacked guidance on the default configuration scope and how to switch to a `project` scope. A new \"Tips\" section has been added to:\r\n    - Explain the default scope and the purpose of `--scope project`.\r\n    - Provide a clear, recommended CLI method for switching scopes.\r\n    - Offer an advanced, manual method by editing the `.claude.json` file.\n\n* Update CLAUDE_CODE_SETUP.md  again",
          "timestamp": "2025-10-27T22:43:48+01:00",
          "tree_id": "7fc3ae049f9d8346cd274a449032eed62cd7b3e7",
          "url": "https://github.com/willb-tech/n8n-mcp/commit/18b8747005effbff0bba122acf8b0191297252e9"
        },
        "date": 1761638116914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25784142fe12ebaebde961f3488577311755cd05",
          "message": "fix: address tools documentation gaps and outdated references (v2.26.3) (#443)",
          "timestamp": "2025-11-26T00:57:15+01:00",
          "tree_id": "adccab663f47aabed599b8585de91aa7a6e955eb",
          "url": "https://github.com/willb-tech/n8n-mcp/commit/25784142fe12ebaebde961f3488577311755cd05"
        },
        "date": 1764169949065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "974a9fb3492fe2c4984ee0549085d531cdc6242a",
          "message": "chore: update n8n to 2.3.3 and bump version to 2.33.2 (#535)\n\n- Updated n8n from 2.2.3 to 2.3.3\n- Updated n8n-core from 2.2.2 to 2.3.2\n- Updated n8n-workflow from 2.2.2 to 2.3.2\n- Updated @n8n/n8n-nodes-langchain from 2.2.2 to 2.3.2\n- Rebuilt node database with 537 nodes (434 from n8n-nodes-base, 103 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-13T17:47:27+01:00",
          "tree_id": "79bb647536c9c858570eb5aef0acf8a1bbcb4a15",
          "url": "https://github.com/willb-tech/n8n-mcp/commit/974a9fb3492fe2c4984ee0549085d531cdc6242a"
        },
        "date": 1768392285909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87f26eef1847852b0f8907b11014001ef4074fd9",
          "message": "fix: comprehensive param type coercion for Claude Desktop/Claude.ai (#605) (#609)\n\nExpand coerceStringifiedJsonParams() to handle ALL type mismatches,\nnot just stringified objects/arrays. Testing showed 6/9 tools still\nfailing in Claude Desktop after v2.35.4.\n\n- Coerce string→number, string→boolean, number→string, boolean→string\n- Add safeguard for entire args object arriving as JSON string\n- Add [Diagnostic] section to error responses with received arg types\n- Bump to v2.35.5\n- 24 unit tests (9 new)\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-22T07:07:30+01:00",
          "tree_id": "a2b3f1b9d290f4a5565bc9bc3b5dfaace4551cfd",
          "url": "https://github.com/willb-tech/n8n-mcp/commit/87f26eef1847852b0f8907b11014001ef4074fd9"
        },
        "date": 1772283613144,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}