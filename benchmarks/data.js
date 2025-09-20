window.BENCHMARK_DATA = {
  "lastUpdate": 1758381732377,
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
      }
    ]
  }
}