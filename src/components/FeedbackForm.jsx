import Card from "./share/Card";
import { useState,useContext,useEffect } from "react";
import Button from "./share/Button";
import RatingSelect from "./RatingSelect"
import FeedbackContext from './context/FeedbackContext'
function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10)
  // feedbackEdit 是 editFeedback函数点击生成的对象
  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)
  // 实现点击编辑，数据传输到上方评论区
  useEffect(() => {
    if(feedbackEdit.edit===true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('评论要满10字哦');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    const newFeedback={
      text:text,
      rating:rating
    }
    if(feedbackEdit.edit===true){
      updateFeedback(feedbackEdit.item.id,newFeedback)
    }else{
      addFeedback(newFeedback)
    }
    setText("")
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>留下您的评论</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="请输入..."
            value={text}
          ></input>
          <Button type="submit" isDisabled={btnDisabled}>
            提交
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>

  );
}

export default FeedbackForm;
