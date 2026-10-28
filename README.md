# Node.js GMP — Task 1: Introduction

Examples from the "Introduction to Node.js" module. Node.js v22.
Run each file from its own folder: `cd <folder> && node <file>`.

| Folder | Files | What it shows |
|---|---|---|
| `hello_world` | `hello.js`, `greet.js`, `info.cjs`, `server.js`, `tryREPL.md` | First script, `process.argv`, `__filename`/`process` info, env variables, REPL |
| `hello_world` | `callback.js`, `promise.js` | Reading a file with a callback vs a Promise |
| `modules` | `app.cjs` + `math.cjs`, `app.mjs` + `math.mjs` | CommonJS (`require`) vs ES Modules (`import`) |
| `async_await` | `async_await.js` | async/await: read config → read data → write `output.txt` |
| `parallel_operations` | `index.js` | Reading 3 files in parallel with `Promise.all` |
| `event_loop` | `event_loop.js`, `blocking_nonblocking.js` | Non-blocking I/O, `readFileSync` vs `readFile` |

Note: `package.json` has `"type": "module"`, so CommonJS files use the `.cjs` extension.
