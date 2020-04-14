# Repro for bug 

https://github.com/egoist/rollup-plugin-postcss/issues/238#issuecomment-613572394

How to use:

```
yarn install && yarn build:rollup
```

Output:

```
yarn install && yarn build:rollup
➤ YN0000: ┌ Resolution step
➤ YN0002: │ repro-rollup-css@workspace:. doesn't provide webpack@>=2 requested by babel-loader@npm:8.0.6
➤ YN0060: │ draft-js-emoji-plugin@npm:2.1.3 [294aa] provides draft-js@npm:0.11.0 [294aa] with version 0.11.0 which doesn't satisfy ^0.10.5 requested by find-with-regex@npm:1.1.3
➤ YN0002: │ react-icons@npm:2.2.7 [709fa] doesn't provide prop-types@* requested by react-icon-base@npm:2.1.0
➤ YN0000: └ Completed in 0.22s
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 2.41s
➤ YN0000: ┌ Link step
➤ YN0007: │ fsevents@patch:fsevents@npm%3A1.2.12#builtin<compat/fsevents>::version=1.2.12&hash=77dfe6 must be built because it never did before or the last one failed
➤ YN0007: │ core-js@npm:2.6.11 must be built because it never did before or the last one failed
➤ YN0000: └ Completed in 15.16s
➤ YN0000: Done with warnings in 17.92s

./src/index.tsx → lib, lib...
[!] (plugin postcss) Error: EISDIR: illegal operation on a directory, read
.yarn/$$virtual/draft-js-emoji-plugin-virtual-709fa85ff8/0/cache/draft-js-emoji-plugin-npm-2.1.3-370d6be8b2-2.zip/node_modules/draft-js-emoji-plugin/lib/plugin.css
Error: EISDIR: illegal operation on a directory, read
```