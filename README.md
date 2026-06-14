```
                                  __
                                 |  \
  __    __   ______    _______  _| $$_     ______    ______    ______   ______ ____
 |  \  |  \ /      \  /       \|   $$ \   /      \  /      \  |      \ |      \    \
 | $$  | $$|  $$$$$$\|  $$$$$$$ \$$$$$$  |  $$$$$$\|  $$$$$$\  \$$$$$$\| $$$$$$\$$$$\
 | $$  | $$| $$  | $$ \$$    \   | $$ __ | $$   \$$| $$    $$ /      $$| $$ | $$ | $$
 | $$__/ $$| $$__/ $$ _\$$$$$$\  | $$|  \| $$      | $$$$$$$$|  $$$$$$$| $$ | $$ | $$
  \$$    $$| $$    $$|       $$   \$$  $$| $$       \$$     \ \$$    $$| $$ | $$ | $$
   \$$$$$$ | $$$$$$$  \$$$$$$$     \$$$$  \$$        \$$$$$$$  \$$$$$$$ \$$  \$$  \$$
           | $$
           | $$
            \$$
```

![Upstream Cloud](https://img.shields.io/badge/upstream_cloud-v0.2.0-blue)
![npm](https://img.shields.io/npm/v/upstream-sdk)
![npm downloads](https://img.shields.io/npm/dm/upstream-sdk)
![License](https://img.shields.io/badge/license-CC_BY_NC_4.0-red)
[![Build](https://github.com/linusdotmy/upstream/actions/workflows/ci.yml/badge.svg)](https://github.com/linusdotmy/upstream/actions/workflows/ci.yml)

## Upstream

I've been developing Upstream behind the scenes for the past few months and using it internally across my own applications, and felt that it's time to open it up to the community.

Basically, Upstream is a easy way to integrate logging into your applications. It takes literally minutes to setup. You signup, create a project and API key, and plug it into your project with ``upstream-sdk``.

<img width="1361" height="1270" alt="image" src="https://github.com/user-attachments/assets/8fd5a222-9628-4159-a3a4-e3924df5552d" />

## Quick Start

1. Go to https://up.linus.my and register an API key for your project.
2. Install ``upstream-sdk`` into your project.
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

That's just scratching the surface. You can log complex events with json, events, descriptions, fields, and even add action buttons. For the full API, visit our [docs](https://docs.linus.my/upstream).

## Contributing
We currently aren't accepting any outside contributions to the main app (Upstream Cloud is closed source. This may change in the future). However, if you have any feature suggestions, feel free to open a issue and describe the thing you would like.

Contributions to the ``upstream-sdk`` or Upstream marketing site are welcome. Before contributing, we recommend you open a issue with what your trying to add first. More information is available [here](CONTRIBUTING.md).

## License

The Upstream SDK and marketing site are licensed under **CC BY-NC 4.0**. See the [license](LICENSE) file for more details.

Built by [Linus Kang](https://github.com/linuskang).
