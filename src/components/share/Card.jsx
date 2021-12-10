//这是一个卡片组件
import PropTypes from 'prop-types'
function Card({children,reverse}) {
    const nightStyle ={
        backgroundColor:reverse? 'rgba(0,0,0,0.4)':'#fff',
        color:reverse?'#fff':'#000'
    }
    return (
        <div className="card" style={nightStyle}>
            {children}
        </div>
    )
}
// 对传入过来的props进行验证处理
Card.defaultProps ={
    reverse:false
}
Card.propTypes={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool
}

export default Card
