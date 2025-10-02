window.BENCHMARK_DATA = {
  "lastUpdate": 1759390899745,
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
      }
    ]
  }
}