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

## Upstream - Quick Start

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

And your done! For API documentation, visit our [docs](https://docs.linus.my/upstream).

## Contributing
We currently aren't accepting any outside contributions to the main app. However, if you have any feature suggestions, feel free to open a issue and describe the thing you would like.

Contributions to the sdk are welcome. Before contributing, we recommend you open a issue with what your trying to add first, before opening PRs. More contributon information is available [here](CONTRIBUTING.md).

## License

The Upstream SDK is licensed under **CC BY-NC 4.0**. See the [license](LICENSE) file for more details.

Built by [Linus Kang](https://github.com/linuskang).

<img width="1361" height="1270" alt="image" src="https://github.com/user-attachments/assets/8fd5a222-9628-4159-a3a4-e3924df5552d" />
