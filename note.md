# JSX
JSX是React.createElement的语法糖。
```
React.createElement(标签名,{className:'xxx'},'内容')
```
{}中存放js表达式

# props
## 父子传参
+ 父:组件上直接写参数名，例如 ```<Header text="123"/>```或```<Header text={true}/>```
+ 子:函数中接受function(props),函数return内部通过{props.text}调用，也可以function({text})直接拆，函数return内部通过{text}调用。
## PropTypes:将收到的参数进行类型检测
+ 子组件中可以对父组件传过来的参数做验证处理，用组件名.defaultProps的形式来设可以默认props,也可以通过引入PropType包，来对props进行类型限制。

# CSS in JS
+ 标签内直接写驼峰```style={{backgroundColor="black"}}```
+ 也可以用父类传参的方式，例如```<Header bgColor="black">```,子类通过K-V来对应
``` <div style={{backgroundColor:bgColor}}> ```
# useState
使用useState来进行数据的状态管理,同样的，可以局部使用，也可以跨组件使用
跨组件使用方式:父组件将[state,setState]中的state传递给子组件<Header state={state}>，然后子组件用function({state})去接受,接下来可以对数据进行操作了。例如用state.map((item)=>(<Zujian key={state.id}/>....))来遍历

# props -> children
+ 父组件引用子组件<Son/>,在子组件内部写了点东西，例如:```<Son><h1>123<h1></Son>```,子组件可以通过```function({children}){return <div>{children}<div>}```来得到```<h1>123<h1>```内容 

# 组件传递数据
## 举例：点击按钮，删除组件
删除组件的实际操作函数是在最上层:**App.js**执行的。他会将**handleDelete**函数挂载在**FeedbackList**组件上,**FeedbackList**组件不进行任何操作，他紧接着传递给**FeedbackItem**这个组件,我们把删除按钮```<button>```写在**FeedbackItem**这个组件内，在```<button>```内部执行这个操作```onClick={()=>handleDelete(item.id)} ```

# React路由管理工具:react-router-dom
点击到其他页面时，防止客户端刷新。我们要提前在服务端做好。
## App.js
**引入BrowserRouter Routes Route**
BrowserRouter->Routes->Route，想在/xxx路由下渲染的组件加入Route的element{}中
```<BrowserRouter><Routes><Route path="/xxx" elements={}></Routes></BrowserRouter>```
在Route中加入exact，可以精确渲染。
Routes的作用相当于Switch,一旦匹配到对应的，后面的就不渲染了
## 点击跳转.js中
引入**Link** 
### 静态跳转:例如点击按钮，跳转到首页或其他页面
``` <Link to="./about">``` 
### 动态跳转：例如点击商品，显示它的商品详情页
```<Link to=`/shop/${item.name}`>{item.id}</Link>```
## Match
使用React-router-dom中的match.可以获取<Route path="/xxx">的url参数。子组件在函数中通过{match}接受。举例：path中的最后一部分是id,此时子组件通过获取这个Id来拿到一一对应的图片。
> 30min:https://www.youtube.com/watch?v=Law7wfdg_ls

# Context 钩子 
管理数据状态
## 数据移动到Context
+ 我们创建一个js文件(FeedbackContext)，用来存放一些评论数据。引入了createContext和useState。
+ 创建并导出函数:FeedbackProvider
+ 在函数中创建上下文 const FeedbackContext = createContext()
+ 将数据存放到const [feedback,setFeedback] = useState()中
+ 返回一个 ```<FeedbackContext.Provider value={{feedback:feedback}}>
         {children}
     </FeedbackContext.Provider>``` 其中value指向useState的第一个参数
+ 在App.js总组件中，导入FeedbackProvider，用```<FeedbackProvider>```包裹子组件
+ 在子组件中，引入useContext 和 js文件.``` const {feedback} = useContext(FeedbackContext)```
这样就算子组件引入成功了，我们不用一个个在组件中传递数据了，直接调用总线上的就好。
## 函数移动到Context
+ 将处于App.js中的函数放入js文件内，并在value处注册
+ 在需要用到该函数的组件中引用，同上。将之前通过传递得到的函数直接修改为js文件中的函数名即可。

# Effect 钩子
复用组件
