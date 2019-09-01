# 编译原理
#### 1. 分词(Tokenizing)/词法分析(Lexing)   
这个过程是将所有代码（由程序员编写的字符串）分解成小的有意义的代码片段，而这些片段就是词法单元(token)。例如：var a = 2; 这个字符串会被分解为'var'/'a'/'='/'2'/';'这些词法单元。
#### 2. 解析／语法分析(Parsing)
将词法分析的结果(词法单元流（数组）)转换成一棵由元素逐级嵌套所组成的代表程序语法结构的树。而这棵树被称为"抽象语法树"(Abstract Syntax Tree, AST)。   
例如var a = 2; 的语法树中可能包含一个VariableDeclaration的顶级节点，接下来有一个Identifier(它的值为a)的子节点，以及一个叫做AssignmentExpression的子节点。AssignmentExpression节点有一个节点叫作Numericliteral（它的值是2）的子节点。
#### 3. 代码生成
这一阶段就是将上一阶段生成的抽象语法树转换为机器指令。