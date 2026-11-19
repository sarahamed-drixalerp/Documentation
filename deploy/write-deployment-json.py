#!/usr/bin/env python3
"""Write the public deployment record. Values come from the workflow environment."""

import json
import os
import sys
from datetime import datetime, timezone

destination = sys.argv[1]
engineer = os.environ.get("ENGINEER", "").strip() or os.environ["ENGINEER_LOGIN"]
payload = {
    "version": os.environ["VERSION"],
    "deployedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    "engineer": engineer,
    "engineerLogin": os.environ["ENGINEER_LOGIN"],
    "commitSha": os.environ["COMMIT_SHA"],
    "commitUrl": os.environ["COMMIT_URL"],
    "workflowRunUrl": os.environ["RUN_URL"],
}
os.makedirs(os.path.dirname(destination) or ".", exist_ok=True)
with open(destination, "w", encoding="utf-8", newline="\n") as handle:
    json.dump(payload, handle, indent=2)
    handle.write("\n")
