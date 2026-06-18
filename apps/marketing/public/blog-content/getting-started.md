---
title: "Getting Started with Upstream"
date: "2026-06-18"
description: "Learn how to get started with Upstream. Integrate into your app in minutes!"
---

## What is Upstream?

Upstream is a simple logging platform built for developers. It allows you to send events from your applications, search through them with powerful filtering, and manage your most critical logs with ease.

### Getting Started

To get started with Upstream, you first need to create an account.

1. Head to https://up.linus.my and create a free account, which includes 100 free events per month.
2. Create a project & API key associated with that project.

Once you have an account, you can install the Upstream SDK:

```bash
npm install upstream-sdk
```

We currently only support the npm registry, more packages are planned for other programming languages soon after we finish perfecting the product on Next.js.

### Sending Your First Event

Sending an event is straightforward:

Initialise ``upstream-sdk`` in your project:
```typescript
import { Upstream } from "upstream-sdk"

const up = new Upstream("YOUR_API_KEY")
```
That's it, your done! Start ingesting events using ``events.ingest``:

```typescript
const res = await up.events.ingest(
    {
        "title": "Hello, world!",
        "icon": "😁"
    }
)

console.log(res)
```
Your first event has been sent! View it on the Upstream dashboard. Those are the basics of sending an event. We also support all of these fields:

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

Too much? Don't worry, I've made a simple playground repository to show you the main logging concepts with ``upstream-sdk`` - at [linusdotmy/upstream-playground](https://github.com/linusdotmy/upstream-playground). The full API documentation is at https://docs.up.linus.my.

## Plan structure

Account plans haven't been fully decided yet, but as of now, there are 2 plans available to the public, explained below:

### Free
- Up to 1 project
- Up to 50 events / month
- Up to 7 days event retention
- Up to 1 member
- Community support

### Pro ($29 AUD / month)
- Up to 10 projects
- Up to 10,000 events / month
- Up to 90 days event retention
- Up to 10 project members
- Analytics
- Event exporting
- Webhooks
- Audit logs
- Email support

This pricing structure isn't final and will most likely change in the future. *(psssst~ users who sign up during the beta now get the pro plan benefits for free during the beta, sign up!)*

## What's next?

Upstream is currently still on beta undergoing heavy development, and most features are currently still being implemented. Stay tuned for updates!

Have a feature suggestion? [Create an issue](https://github.com/linusdotmy/upstream/issues/new) on our Github repository and we'll take a look at it. The current project roadmap is at https://linus.my/go/up-roadmap.

*Happy logging! 🚀*
