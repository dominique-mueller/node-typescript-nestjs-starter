workflow "Backend Application" {
  on = "push"
  resolves = ["Test", "Test (e2e)"]
}

action "Install" {
  uses = "docker://node:12.6-alpine"
  runs = "npm ci"
  env = {
    CI = "true"
  }
}

action "Build" {
  needs = ["Install"]
  uses = "docker://node:12.6-alpine"
  runs = "npm run build"
  env = {
    CI = "true"
  }
}

action "Test" {
  needs = ["Build"]
  uses = "docker://node:12.6-alpine"
  runs = "npm run test"
  env = {
    CI = "true"
  }
}

action "Test (e2e)" {
  needs = ["Build"]
  uses = "docker://node:12.6-alpine"
  runs = "npm run test:e2e"
  env = {
    CI = "true"
  }
}
