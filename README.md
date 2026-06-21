<p align="center">
  <img width="192" height="192" alt="192x192" src="https://github.com/user-attachments/assets/4c97f877-4fba-4146-885c-26f945bb6682" />
</p>

<h1 align="center">Upstream</h1>

<p align="center">
  <img src="https://img.shields.io/badge/upstream-v0.2.1-blue" alt="Upstream" />
  <img src="https://img.shields.io/npm/v/upstream-sdk" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/upstream-sdk" alt="npm downloads" />
  <img src="https://img.shields.io/badge/license-CC_BY_NC_4.0-red" alt="License" />
  <a href="https://github.com/linusdotmy/upstream/actions/workflows/ci.yml">
    <img src="https://github.com/linusdotmy/upstream/actions/workflows/ci.yml/badge.svg" alt="Build" />
  </a>
</p>

This is a passion project I've been developing for the past few months, and usign it internally across my apps. I needed a simple logging platform that was quick to setup for new projects, had awesome logging capabilities, and beautiful UI. This is what I came up with.

Basically, Upstream is a easy way to integrate logging into your own applications. It takes minutes to setup - you create a account, project, API key, and integrate it with your project using my SDK. Upstream is currently closed source for now. However, I might open source it in the future.

<img width="1058" height="1161" alt="image" src="https://github.com/user-attachments/assets/dca4b617-ec34-46d1-a48a-5c33305d4536" />


## I want to try Upstream!

1. Go to https://up.linus.my and register an API key for your project.
2. Install ``upstream-sdk``
```bash
npm i upstream-sdk
```
3. Start ingesting events, below is an example.

```ts
import { Upstream } from 'upstream-sdk'

const up = new Upstream("YOUR_API_KEY")

up.events.ingest({
    title: "Project Deployed",
    icon: "😁",
});
```

That's just scratching the surface. You can log complex events with json, events, descriptions, fields, and even add action buttons.

| Field      | Type              | Required | Example |
|------------|-------------------|----------|---------|
| `title`    | `string`          | Yes      | `"Payment Processed"` |
| `icon`     | `string`          | Yes      | `"💰"` |
| `category` | `string`          | No       | `"billing"` |
| `content`  | `string`          | No       | `"Your subscription was renewed successfully."` |
| `fields`   | `Field[]`         | No       | `[{"name":"Plan","value":"Pro"}]` |
| `events`   | `TimelineEvent[]` | No       | `[{"icon":"✅","time":"12:00 PM","content":"Subscription renewed."}]` |
| `data`     | `unknown`         | No       | `{"subscriptionId":"sub_abc123"}` |
| `actions`  | `Action[]`        | No       | `[{"title":"View Invoice","type":"default","url":"https://example.com"}]` |

## License

Licensed under CC BY-NC 4.0. See [LICENSE](LICENSE) for more.

Built with ❤️ by [Linus Kang](https://github.com/linuskang)
