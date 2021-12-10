import Card from '../components/share/Card'
import {Link} from 'react-router-dom'
function AbourPage() {
    return (
        <Card>
           <h1>关于本页</h1>
           <p>这是一个用React编写的评分组件库</p>
           <p>Source Code👉🏼:https://github.com/DongHY1/React-Feedback-Component</p>
           <p><Link to='/'>回到首页</Link></p>
        </Card>
    )
}

export default AbourPage
