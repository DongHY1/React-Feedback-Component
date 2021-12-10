import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'
function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    let average = feedback.reduce((acc,cur)=>{
        return (acc+cur.rating)
    },0)/feedback.length
    return (
        <div className="feedback-stats">
            <h3>{feedback.length}条评论</h3>
            <h3>平均评分:{average.toFixed(1)}</h3>
        </div>
    )
}
FeedbackStats.propTypes={
    feedback:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
        })
    )
}


export default FeedbackStats
