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

## Simple and open logging for your next project.

Try it today at https://up.linus.my.

## Quick Start

1. Go to https://up.linus.my and register an API key for your project.
2. Install ``upstream-sdk`` into your project.
```bash
npm i upstream-sdk
```
3. Start ingesting events, below is an example.

```ts
import { Upstream } from 'upstream-sdk'

const up = Upstream.init("YOUR_API_KEY")

up.events.ingest(
    {
        title: "Project Deployed",
        icon: "😁",
        time: "10:10pm"
    }
);
```

And your done! For API documentation, visit our [docs](https://docs.linus.my/upstream).

## License

The Upstream Marketing site & SDK are licensed under **CC BY-NC 4.0**. See the [license](LICENSE) file for more details.

Upstream Core is currently closed source whilst we continue development. We may open source it in the future once it becomes stable, however we do not have any plans of doing that now.

Built by [Linus Kang](https://linus.my).