#!/bin/sh
# 查看有字符串`import reversion`,使用vim 进行编辑。
grep -Zrainl  "import reversion" . | xargs -0 vim

# 查找项目中的`json`文件，并用vim批量进行编辑，去除掉文件名中保护`test`字符串的文件。
find . -name "*.json" -print0 | grep -zv test | xargs -0 vim

