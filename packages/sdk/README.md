# upstream-sdk

SDK for [Upstream](https://up.linus.my) — an open logging platform for SaaS and software logs.

## Installation

```bash
npm install upstream-sdk
```

## Usage

```ts
import { Upstream } from 'upstream-sdk'

const up = new Upstream('YOUR_API_KEY')

up.events.ingest({
    title: 'Project Deployed',
    icon: '😁',
    category: 'deployment',
})
```

### Custom host (enterprise)

```ts
const up = new Upstream('YOUR_API_KEY', {
    host: 'https://customhost.linus.my',
})

up.events.ingest({
    title: 'Project Deployed',
    icon: '😁',
})
```

## API

### `EventProps`

| Field       | Type                              | Required |
|-------------|-----------------------------------|----------|
| `title`     | `string`                          | yes      |
| `icon`      | `string`                          | yes      |
| `createdAt` | `string`                          | no       |
| `content`   | `string`                          | no       |
| `category`  | `string`                          | no       |
| `fields`    | `{ name, value }[]`               | no       |
| `events`    | `{ icon, time, content }[]`      | no       |
| `data`      | `unknown`                         | no       |
| `actions`   | `{ title, type, url }[]`         | no       |

## License

MIT
